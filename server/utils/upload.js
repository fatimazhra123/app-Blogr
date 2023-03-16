const multer =require ('multer');
const { GridFsStorage } =require ('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: `mongodb+srv://fatimazahrabouamoud:0630624513@cluster0.sydh1ch.mongodb.net/test`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

module.exports = multer({storage}); 