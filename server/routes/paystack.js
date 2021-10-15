const router = require('express').Router()


router.post('/', adminProtect, createProduct )