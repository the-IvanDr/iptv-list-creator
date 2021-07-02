import { GetList } from "../../utils/firebaseAPI";

export default async function getFile(req, res) {    
    console.log('getfile request...');
    
    const list = await GetList();

    let iptvTextContent = '#EXTM3U\n';
    
    list.forEach((item, idx) => {
        iptvTextContent += `#EXTINF: 0, ${item.name}\n`;
        iptvTextContent += `${item.href}\n`;
    });   

    res.setHeader('Content-type', "application/octet-stream");
    res.setHeader('Content-disposition', 'attachment; filename=file.m3u');
    res.send(iptvTextContent);
}