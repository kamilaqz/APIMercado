const PurchaseModel = require('../models/purchaseModel')
const ClientModel = require('../models/clientModel')
const ProductModel = require('../models/productModel')

module.exports= {
    realizarCompra: async (req, res) => {
        try {
            const { clientName, productName } = req.body;

            const cliente = await ClientModel.findOne({ nome: clientName });
            const produto = await ProductModel.findOne({ nome: productName });

            if (!cliente || !produto) {
              return res.status(404).json({ message: 'Cliente ou produto não encontrado.' });
            }

            const purchase = new PurchaseModel({
              cliente: cliente.nome,
              produto: produto.nome,
            });
        
            await purchase.save();

            res.status(200).json({ message: 'Compra realizada com sucesso!' });
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao realizar a compra.' });
          }
        }
    }