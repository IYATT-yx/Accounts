import Accounts from '../models/accountsModel.js';

import express from 'express';
import { Op } from 'sequelize';


const router = express.Router();

// 账单页面
router.get('/accounts', (req, res) => {
    Accounts.findAll()
    .then((data) => {
        res.render('list', { accounts: data.map((item) => item.toJSON()) });
    })
    .catch((err) => {
        res.status(500).render('error', { message: '查询失败', error: err });
    })
});

// 创建账单页面
router.get('/accounts/create', (req, res, next) => {
    res.render('create');
});

// 创建账单请求响应
router.post('/accounts', (req, res) => {
    Accounts.create({
        title: req.body.title,
        time: req.body.time,
        type: req.body.type === 'true',
        account: parseFloat(req.body.account),
        remarks: req.body.remarks
    })
    .then(() => {
        res.render('success', { msg: '添加成功', url: '/accounts' });
    })
    .catch((err) => {
        res.status(500).render('error', { message: '添加失败', error: err});
    })
    
});

// 删除账单请求响应
router.get('/accounts/:id', (req, res, next) => {
    Accounts.destroy({
        where: {
            id: {
                [Op.eq]: req.params.id
            }
        }
    })
    .then((data) => {
        res.render('success', { msg: '删除成功', url: '/accounts' });
    })
    .catch((err) => {
        res.status(500).render('error', { message: '删除失败', error: err});
    })
})

export default router;