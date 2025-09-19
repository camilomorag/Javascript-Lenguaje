const expres= require(`express`)
const app = express();
const PORT =3000;

app.ge('/', (req,res)=>{
    res.send(`HOLA MUNDO`)
})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchaando en http://localhost${PORT}`)
})