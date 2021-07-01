import fs from 'fs';
import path from 'path';

export default function updateHandler(req, res) {

    const list = req.body == '[]' ? [] : JSON.parse(req.body);

    console.log('update -> list:', list);

    const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'public', 'iptvlist.txt');
    const jsonPath = path.resolve(__dirname, '..', '..', '..', '..', 'public', 'iptvlist.json');

    let fileContent = '#EXTM3U\n';
    list.forEach(item => {
        fileContent += `#EXTINF:0, ${item.name}\n`;
        fileContent += `${item.href}\n`;
    });

    console.log('fileContent:', fileContent);

    fs.writeFile(filePath, fileContent, (err) => {
        if (err)
            return res.status(500).json({ error: err.message });
    });
    fs.writeFile(jsonPath, req.body, 'utf8', (err) => {
        if (err)
            return res.status(500).json({ error: err.message });
    });

    return res.status(200).json({ success: true });
}
