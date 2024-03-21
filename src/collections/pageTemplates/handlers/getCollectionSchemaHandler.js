import fs from 'fs'

export default async function (req, res) {
    const collection = req.params.collection

    if (!collection) {
        return res.status(400).json({
            error: 'No collection specified'
        })
    }

    res.json({
        fields: req.payload.collections[collection]?.config?.fields
    })
}