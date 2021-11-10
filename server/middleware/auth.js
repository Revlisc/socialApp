import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        //not using google if less than 500
        const isJWT = token.length < 500

        let decodedData

        if (token && isJWT) {
            decodedData = jwt.verify(token, 'test')

            req.userId = decodedData?.id
        } else {
            decodedData = jwt.decode(token)

            req.userId = decodedData?.sub
        }

        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth