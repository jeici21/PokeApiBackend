import { Op } from 'sequelize';
import {Types} from '../models/Types.js'

export const getAllTypes = async (req, res) =>{
    try {
        const types = await Types.findAll();
        res.setHeader('Content-Type', 'application/json');
        res.json({data: types});
    } catch (error) {
        console.log(error.message); // loggin error
        return res.status(500).json({
            status_code: 500,
            type: error.name,
            message: error.message
        });
    }
}

export const getTypesById = async (req, res) => {
    try {
        const pk = req.params.id
        const type = await Types.findByPk(pk);
        res.setHeader('Content-Type', 'application/json');
        res.json({data: type});
    } catch (error) {
        console.log(error.message); // loggin error
        return res.status(500).json({
            status_code: 500,
            type: error.name,
            message: error.message
        });
    }
}

export const getTypesByName = async (req, res) => {
    try {
        const name = req.params.name
        if ( name.length < 3 ){
            throw new Error("Text too short to search!");
        }
        const type = await Types.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });
        res.setHeader('Content-Type', 'application/json');
        res.json({data: type});
    } catch (error) {
        console.log(error.message); // loggin error
        return res.status(500).json({
            status_code: 500,
            type: error.name,
            message: error.message
        });
    }
}