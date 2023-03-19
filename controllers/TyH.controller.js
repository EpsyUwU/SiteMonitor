import _insertNewDateHyT from "../models/TyH.model.js"

const nuevoRegistroTyH = async(req,res) => {
        console.log(req.body);

        _insertNewDateHyT._insertNewDateHyT(req.body.data,(data)=>{

        });

        res.send("ok");
}

const all_RegsitroTyH = async(req,res) => {
   
    let fecha = req.body.fecha;

    console.log(req.body);
    _insertNewDateHyT.getall_RegsitroTyH(fecha,(data)=>{
        //let data = data;
        
        //console.log(data.length )
        let {length} = data

        res.json({
            error:false,
            status: 200,
            message:length + " registros encontrados",
            data,
        });
    })
}



const TyH = {
    nuevoRegistroTyH,
    all_RegsitroTyH
} 

export default TyH ;