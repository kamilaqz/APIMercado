const PurchaseModel = require('../models/purchaseModel')
const ClientModel = require('../models/clientModel')
const ProductModel = require('../models/productModel')

module.exports= {
    realizarCompra: async (req, res) => {
        try {
            const { clientId, productId } = req.body;

            const cliente = await ClientModel.findOne({ id: clientId });
            const produto = await ProductModel.findOne({ id: productId });

            if (!cliente || !produto) {
              return res.status(404).json({ message: 'Cliente ou produto não encontrado.' });
            }

            const purchase = new PurchaseModel({
              cliente: cliente._id,
              produto: produto._id,
            });
        
            await purchase.save();

            res.status(200).json({ message: 'Compra realizada com sucesso!' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao realizar a compra.' });
          }
        }
    }