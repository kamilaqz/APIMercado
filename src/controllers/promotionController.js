const PromotionModel = require('../models/promotionModel');
const PurchaseModel = require('../models/purchaseModel');
const ProductModel = require('../models/productModel');
const ClientModel = require('../models/clientModel');

module.exports= {
  createPromotion: async (req, res) => {
    try {
        const result = await PromotionModel.create(req.body)
        res.status(201).json({message: `Promoção criada com sucesso!`})
    } catch (err) {
        res.status(500).json({message: `Não foi possível criar a promoção.`})
    }
  },
  getPromotions: (req, res) => {
      PromotionModel.find({}).select(["-__v", "-_id"]).then((result) => {
          res.status(200).json(result)
      }).catch(() => {
          res.status(500).json({message: "Não foi possível listar as promoções"})
      })
  },
  deletePromotionById: async (req, res) => {
      try {
          const result = await PromotionModel.deleteOne({id: req.params.id})
          res.status(200).send({message: "Promoção removida com sucesso!"})
      } catch (err) {
          res.status(500).json({message: "Não foi possível remover."})
      }
  },
  updatePromotion: async (req, res) => {
      try {
          const result = await PromotionModel.updateOne({id: req.body.id}, req.body)
          res.status(200).send({message: 'Promoção atualizada com sucesso!'})
      } catch (err) {
          res.status(500).json({message: 'Não foi possível atualizar.'})
      }
  },
  promotionsForClient: async (req, res) => {
    try {
      const { id } = req.params;
      const comprasDoCliente = await PurchaseModel.find({ cliente: id});
  
      if (comprasDoCliente.length === 0) {
        return res.status(404).json([]);
      }
  
      const produtosFavoritos = [...new Set(comprasDoCliente.map(compra => compra.produto))];
      
      const promoções = await PromotionModel.find({ produto: { $in: produtosFavoritos } });
  
      res.status(200).json(promoções);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao obter promoções para o cliente.' });
    }
  },
}
  