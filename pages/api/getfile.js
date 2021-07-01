import { GetList } from "../../utils/firebaseAPI";

export default async function getListHandler(req, res) {    
    
    const list = await GetList();

    let iptvTextContent = '#EXTM3U\n';
    
    list.forEach((item, idx) => {
        iptvTextContent += `EXTINF: 0, ${item.name}\n`;
        iptvTextContent += `${item.href}\n`;
    });   
    
    
    // var text = `#EXTM3U\n#EXTINF: 0, kek\nhttp://data05-cdn.datalock.ru/gfi2lm/7e7690eac879d79887a76b3b3d77e8aa/grid/7f_01.Moy.muzhchina,.moya.zhenschina.Vodovorot.chuzhih.zhelaniy.s01.E01.2020.WEBRip.by.Nicodem.Files-x.a1.20.10.20.mp4`;

    res.setHeader('Content-type', "application/octet-stream");
    res.setHeader('Content-disposition', 'attachment; filename=file.txt');
    res.send(iptvTextContent);
}