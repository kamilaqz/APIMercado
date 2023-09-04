const ProductModel = require('../models/productModel')

module.exports= {
    createProduct: async (req, res) => {
        try {
            const result = await ProductModel.create(req.body)
            res.status(201).json({message: `O produto foi criado com sucesso!`})
        } catch (err) {
            res.status(500).json({message: `Não foi possível adicionar o produto.`})
        }
    },
    getProducts: (req, res) => {
        ProductModel.find({}).select(["-__v", "-_id"]).then((result) => {
            res.status(200).json(result)
        }).catch(() => {
            res.status(500).json({message: "Não foi possível listar os produtos"})
        })
    },
    getProductById: async (req, res) => {
        try {
            const result = await ProductModel.findById({id: req.body.id})
            res.status(200).send(result)
        } catch (err) {
            res.status(500).json({message: "Não foi possível listar este produto."})
        }
    },
    deleteProductById: async (req, res) => {
        try {
            const result = await ProductModel.deleteOne({id: req.params.id})
            res.status(200).send({message: "Produto removido com sucesso!"})
        } catch (err) {
            res.status(500).json({message: "Não foi possível remover o produto."})
        }
    },
    updateProduct: async (req, res) => {
        try {
            const result = await ProductModel.updateOne({id: req.body.id}, req.body)
            res.status(200).send({message: 'Produto de id ${req.body.id} foi atualizado com sucesso!'})
        } catch (err) {
            res.status(500).json({message: 'Não foi possível atualizar o produto.'})
        }
    },
    updateProductByType: async (req, res) => {
        try {
          const { tipo, novoPreçoPromoção } = req.body;
      
          const resultado = await ProductModel.updateMany({ tipo }, { preçoPromoção: novoPreçoPromoção });
      
          res.status(200).json({ message: 'Preços atualizados com sucesso!', resultado });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Erro ao atualizar produtos.' });
        }
    }
}