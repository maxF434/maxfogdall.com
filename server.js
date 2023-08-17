const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

var bodyParser = require('body-parser')

const {readFileSync, writeFileSync} = require('fs');

var path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.listen(
    6900,
    () => console.log('http://localhost:6900')
)

app.get('/main.js', (req, res) => {
    res.send(
        readFileSync('main.js', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});


app.get('/style.css', (req, res) => {
    res.send(
        readFileSync('public/style.css', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

app.get('/', (req, res) => {
    res.send(
        readFileSync('index.html', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

app.get('/2000', (req, res) => {
    res.send(
        readFileSync('2000.html', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

app.get('/1900', (req, res) => {
    res.send(
        readFileSync('1900.html', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

app.get('/home', (req, res) => {
    res.send(
        readFileSync('maxfogdall.com/home.html', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

app.get('/home.style.css', (req, res) => {
    res.send(
        readFileSync('public/home.css', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

app.get('/home.app.js', (req, res) => {
    res.send(
        readFileSync('maxfogdall.com/YearProg/app.js', 'utf8', (err, html) => {
            if(err){
                res.status(500);
            }
            res.send(html)
        })
    )
});

posts = JSON.parse(readFileSync('./JSON/posts.json', { encoding: 'utf8' }));

app.get('/posts', (req, res) => {
    res.status(200).send({
        posts:posts
    })
});


app.put('/post', (req, res) => {

    let s = new Date();
    let d = new Date(Date.parse(s));

    if(req.body.text != ""){
        posts.push(
            {
                user: req.body.user,
                text: req.body.text,
                time: d.toUTCString()
            }
        )
    }

    writeFileSync('./JSON/posts.json', (JSON.stringify(posts)))
});



ids = ["JA1796", "TJ1796", "TJ1800", "JA1800", "AB1800", "TJ1804", "CP1804", "JM1808", "CP1808", "JM1812", "DC1812", "JM1816", "RK1816", "JM1820", "JQ1820", "JQ1824", "AJ1824", "WC1824", "HC1824", "AJ1828", "JQ1828", "AJ1832", "HC1832", "WW1832", "JF1832", "MVB1836", "WHH1836","HW1836","WM1836","DW1836", "WHH1840", "MVB1840", "JP1844", "HC1844", "ZT1848", "LC1848", "MVB1848", "FP1852", "WS1852", "JH1852", "JB1856", "JF1856", "MF1856", "AL1860", "SD1860", "JBRIDGE1860", "JBELL1860", "AL1864", "GM1864", "UG1868", "HS1868", "UG1872", "HG1872", "RH1876", "ST1876", "JG1880", "WSH1880", "GC1884", "JB1884", "BH1888", "GC1888", "GC1892", "BH1892", "JW1892", "WJB1896", "WM1896", "WJB1900", "WM1900", "TR1904", "AP1904", "WT1908", "WJB1908", "WW1912", "WT1912", "TR1912", "ED1912", "CEH1916", "WW1916", "JC1920", "WH1920", "CC1924", "JD1924", "RF1924", "HH1928", "AS1928", "FDR1932", "HH1932", "AL1936", "FDR1936", "FDR1940", "WW1940", "FDR1944", "TD1944", "HT1948", "TD1948", "ST1948", "DE1952", "AS1952", "DE1956", "AS1956", "JFK1960", "RN1960", "LBJ1964", "BG1964", "RN1968", "HH1968", "GW1968", "RN1972", "GM1972", "GF1976", "JC1976", "RR1980", "JC1980", "JA1980", "WM1984", "RR1984", "MD1988", "GB1988", "BC1992", "GB1992", "RP1992", "RP1996", "BC1996", "BD1996", "GB2000", "AG2000", "GB2004", "JK2004", "BO2008", "JM2008", "BO2012", "MR2012", "DT2016", "HC2016", "GJ2016", "JS2016", "JB2020", "DT2020", "JJ2020"]
//elections = [["JA1796", "TJ1796"], ["TJ1800", "JA1800", "AB1800"], ["TJ1804", "CP1804"], ["JM1808", "CP1808"], ["JM1812", "DC1812"], ["JM1816", "RK1816"], ["JM1820", "JQ1820"], []]

var JA1796 = parseInt(readFileSync('./Pages/JA1796.txt', { encoding: 'utf8' }));
var TJ1796 = parseInt(readFileSync('./Pages/TJ1796.txt', { encoding: 'utf8' }));
var TJ1800 = parseInt(readFileSync('./Pages/TJ1800.txt', { encoding: 'utf8' }));
var JA1800 = parseInt(readFileSync('./Pages/JA1800.txt', { encoding: 'utf8' }));
var AB1800 = parseInt(readFileSync('./Pages/AB1800.txt', { encoding: 'utf8' }));
var TJ1804 = parseInt(readFileSync('./Pages/TJ1804.txt', { encoding: 'utf8' }));
var CP1804 = parseInt(readFileSync('./Pages/CP1804.txt', { encoding: 'utf8' }));
var JM1808 = parseInt(readFileSync('./Pages/JM1808.txt', { encoding: 'utf8' }));
var CP1808 = parseInt(readFileSync('./Pages/CP1808.txt', { encoding: 'utf8' }));
var JM1812 = parseInt(readFileSync('./Pages/JM1812.txt', { encoding: 'utf8' }));
var DC1812 = parseInt(readFileSync('./Pages/DC1812.txt', { encoding: 'utf8' }));
var JM1816 = parseInt(readFileSync('./Pages/JM1816.txt', { encoding: 'utf8' }));
var RK1816 = parseInt(readFileSync('./Pages/RK1816.txt', { encoding: 'utf8' }));
var JM1820 = parseInt(readFileSync('./Pages/JM1820.txt', { encoding: 'utf8' }));
var JQ1820 = parseInt(readFileSync('./Pages/JQ1820.txt', { encoding: 'utf8' }));
var JQ1824 = parseInt(readFileSync('./Pages/JQ1824.txt', { encoding: 'utf8' }));
var AJ1824 = parseInt(readFileSync('./Pages/AJ1824.txt', { encoding: 'utf8' }));
var WC1824 = parseInt(readFileSync('./Pages/WC1824.txt', { encoding: 'utf8' }));
var HC1824 = parseInt(readFileSync('./Pages/HC1824.txt', { encoding: 'utf8' }));
var AJ1828 = parseInt(readFileSync('./Pages/AJ1828.txt', { encoding: 'utf8' }));
var JQ1828 = parseInt(readFileSync('./Pages/JQ1828.txt', { encoding: 'utf8' }));
var AJ1832 = parseInt(readFileSync('./Pages/AJ1832.txt', { encoding: 'utf8' }));
var HC1832 = parseInt(readFileSync('./Pages/HC1832.txt', { encoding: 'utf8' }));
var WW1832 = parseInt(readFileSync('./Pages/WW1832.txt', { encoding: 'utf8' }));
var JF1832 = parseInt(readFileSync('./Pages/JF1832.txt', { encoding: 'utf8' }));
var MVB1836 = parseInt(readFileSync('./Pages/MVB1836.txt', { encoding: 'utf8' }));
var WHH1836 = parseInt(readFileSync('./Pages/WHH1836.txt', { encoding: 'utf8' }));
var HW1836 = parseInt(readFileSync('./Pages/HW1836.txt', { encoding: 'utf8' }));
var WM1836 = parseInt(readFileSync('./Pages/WM1836.txt', { encoding: 'utf8' }));
var DW1836 = parseInt(readFileSync('./Pages/DW1836.txt', { encoding: 'utf8' }));
var WHH1840 = parseInt(readFileSync('./Pages/WHH1840.txt', { encoding: 'utf8' }));
var MVB1840 = parseInt(readFileSync('./Pages/MVB1840.txt', { encoding: 'utf8' }));
var JP1844 = parseInt(readFileSync('./Pages/JP1844.txt', { encoding: 'utf8' }));
var HC1844 = parseInt(readFileSync('./Pages/HC1844.txt', { encoding: 'utf8' }));
var ZT1848 = parseInt(readFileSync('./Pages/ZT1848.txt', { encoding: 'utf8' }));
var LC1848 = parseInt(readFileSync('./Pages/LC1848.txt', { encoding: 'utf8' }));
var MVB1848 = parseInt(readFileSync('./Pages/MVB1848.txt', { encoding: 'utf8' }));
var FP1852 = parseInt(readFileSync('./Pages/FP1852.txt', { encoding: 'utf8' }));
var WS1852 = parseInt(readFileSync('./Pages/WS1852.txt', { encoding: 'utf8' }));
var JH1852 = parseInt(readFileSync('./Pages/JH1852.txt', { encoding: 'utf8' }));
var JB1856 = parseInt(readFileSync('./Pages/JB1856.txt', { encoding: 'utf8' }));
var JF1856 = parseInt(readFileSync('./Pages/JF1856.txt', { encoding: 'utf8' }));
var MF1856 = parseInt(readFileSync('./Pages/MF1856.txt', { encoding: 'utf8' }));
var AL1860 = parseInt(readFileSync('./Pages/AL1860.txt', { encoding: 'utf8' }));
var SD1860 = parseInt(readFileSync('./Pages/SD1860.txt', { encoding: 'utf8' }));
var JBRIDGE1860 = parseInt(readFileSync('./Pages/JBRIDGE1860.txt', { encoding: 'utf8' }));
var JBELL1860 = parseInt(readFileSync('./Pages/JBELL1860.txt', { encoding: 'utf8' }));
var AL1864 = parseInt(readFileSync('./Pages/AL1864.txt', { encoding: 'utf8' }));
var GM1864 = parseInt(readFileSync('./Pages/GM1864.txt', { encoding: 'utf8' }));
var UG1868 = parseInt(readFileSync('./Pages/UG1868.txt', { encoding: 'utf8' }));
var HS1868 = parseInt(readFileSync('./Pages/HS1868.txt', { encoding: 'utf8' }));
var UG1872 = parseInt(readFileSync('./Pages/UG1872.txt', { encoding: 'utf8' }));
var HG1872 = parseInt(readFileSync('./Pages/HG1872.txt', { encoding: 'utf8' }));
var RH1876 = parseInt(readFileSync('./Pages/RH1876.txt', { encoding: 'utf8' }));
var ST1876 = parseInt(readFileSync('./Pages/ST1876.txt', { encoding: 'utf8' }));
var JG1880 = parseInt(readFileSync('./Pages/JG1880.txt', { encoding: 'utf8' }));
var WSH1880 = parseInt(readFileSync('./Pages/WSH1880.txt', { encoding: 'utf8' }));
var GC1884 = parseInt(readFileSync('./Pages/GC1884.txt', { encoding: 'utf8' }));
var JB1884 = parseInt(readFileSync('./Pages/JB1884.txt', { encoding: 'utf8' }));
var BH1888 = parseInt(readFileSync('./Pages/BH1888.txt', { encoding: 'utf8' }));
var GC1888 = parseInt(readFileSync('./Pages/GC1888.txt', { encoding: 'utf8' }));
var GC1892 = parseInt(readFileSync('./Pages/GC1892.txt', { encoding: 'utf8' }));
var BH1892 = parseInt(readFileSync('./Pages/BH1892.txt', { encoding: 'utf8' }));
var JW1892 = parseInt(readFileSync('./Pages/JW1892.txt', { encoding: 'utf8' }));
var WJB1896 = parseInt(readFileSync('./Pages/WJB1896.txt', { encoding: 'utf8' }));
var WM1896 = parseInt(readFileSync('./Pages/WM1896.txt', { encoding: 'utf8' }));
var WJB1900 = parseInt(readFileSync('./Pages/WJB1900.txt', { encoding: 'utf8' }));
var WM1900 = parseInt(readFileSync('./Pages/WM1900.txt', { encoding: 'utf8' }));
var TR1904 = parseInt(readFileSync('./Pages/TR1904.txt', { encoding: 'utf8' }));
var AP1904 = parseInt(readFileSync('./Pages/AP1904.txt', { encoding: 'utf8' }));
var WT1908 = parseInt(readFileSync('./Pages/WT1908.txt', { encoding: 'utf8' }));
var WJB1908 = parseInt(readFileSync('./Pages/WJB1908.txt', { encoding: 'utf8' }));
var WW1912 = parseInt(readFileSync('./Pages/WW1912.txt', { encoding: 'utf8' }));
var WT1912 = parseInt(readFileSync('./Pages/WT1912.txt', { encoding: 'utf8' }));
var TR1912 = parseInt(readFileSync('./Pages/TR1912.txt', { encoding: 'utf8' }));
var ED1912 = parseInt(readFileSync('./Pages/ED1912.txt', { encoding: 'utf8' }));
var CEH1916 = parseInt(readFileSync('./Pages/CEH1916.txt', { encoding: 'utf8' }));
var WW1916 = parseInt(readFileSync('./Pages/WW1916.txt', { encoding: 'utf8' }));
var JC1920 = parseInt(readFileSync('./Pages/JC1920.txt', { encoding: 'utf8' }));
var WH1920 = parseInt(readFileSync('./Pages/WH1920.txt', { encoding: 'utf8' }));
var CC1924 = parseInt(readFileSync('./Pages/CC1924.txt', { encoding: 'utf8' }));
var JD1924 = parseInt(readFileSync('./Pages/JD1924.txt', { encoding: 'utf8' }));
var RF1924 = parseInt(readFileSync('./Pages/RF1924.txt', { encoding: 'utf8' }));
var HH1928 = parseInt(readFileSync('./Pages/HH1928.txt', { encoding: 'utf8' }));
var AS1928 = parseInt(readFileSync('./Pages/AS1928.txt', { encoding: 'utf8' }));
var FDR1932 = parseInt(readFileSync('./Pages/FDR1932.txt', { encoding: 'utf8' }));
var HH1932 = parseInt(readFileSync('./Pages/HH1932.txt', { encoding: 'utf8' }));
var AL1936 = parseInt(readFileSync('./Pages/AL1936.txt', { encoding: 'utf8' }));
var FDR1936 = parseInt(readFileSync('./Pages/FDR1936.txt', { encoding: 'utf8' }));
var FDR1940 = parseInt(readFileSync('./Pages/FDR1940.txt', { encoding: 'utf8' }));
var WW1940 = parseInt(readFileSync('./Pages/WW1940.txt', { encoding: 'utf8' }));
var FDR1944 = parseInt(readFileSync('./Pages/FDR1944.txt', { encoding: 'utf8' }));
var TD1944 = parseInt(readFileSync('./Pages/TD1944.txt', { encoding: 'utf8' }));
var HT1948 = parseInt(readFileSync('./Pages/HT1948.txt', { encoding: 'utf8' }));
var TD1948 = parseInt(readFileSync('./Pages/TD1948.txt', { encoding: 'utf8' }));
var ST1948 = parseInt(readFileSync('./Pages/ST1948.txt', { encoding: 'utf8' }));
var DE1952 = parseInt(readFileSync('./Pages/DE1952.txt', { encoding: 'utf8' }));
var AS1952 = parseInt(readFileSync('./Pages/AS1952.txt', { encoding: 'utf8' }));
var DE1956 = parseInt(readFileSync('./Pages/DE1956.txt', { encoding: 'utf8' }));
var AS1956 = parseInt(readFileSync('./Pages/AS1956.txt', { encoding: 'utf8' }));
var JFK1960 = parseInt(readFileSync('./Pages/JFK1960.txt', { encoding: 'utf8' }));
var RN1960 = parseInt(readFileSync('./Pages/RN1960.txt', { encoding: 'utf8' }));
var LBJ1964 = parseInt(readFileSync('./Pages/LBJ1964.txt', { encoding: 'utf8' }));
var BG1964 = parseInt(readFileSync('./Pages/BG1964.txt', { encoding: 'utf8' }));
var RN1968 = parseInt(readFileSync('./Pages/RN1968.txt', { encoding: 'utf8' }));
var HH1968 = parseInt(readFileSync('./Pages/HH1968.txt', { encoding: 'utf8' }));
var GW1968 = parseInt(readFileSync('./Pages/GW1968.txt', { encoding: 'utf8' }));
var RN1972 = parseInt(readFileSync('./Pages/RN1972.txt', { encoding: 'utf8' }));
var GM1972 = parseInt(readFileSync('./Pages/GM1972.txt', { encoding: 'utf8' }));
var GF1976 = parseInt(readFileSync('./Pages/GF1976.txt', { encoding: 'utf8' }));
var JC1976 = parseInt(readFileSync('./Pages/JC1976.txt', { encoding: 'utf8' }));
var RR1980 = parseInt(readFileSync('./Pages/RR1980.txt', { encoding: 'utf8' }));
var JC1980 = parseInt(readFileSync('./Pages/JC1980.txt', { encoding: 'utf8' }));
var JA1980 = parseInt(readFileSync('./Pages/JA1980.txt', { encoding: 'utf8' }));
var WM1984 = parseInt(readFileSync('./Pages/WM1984.txt', { encoding: 'utf8' }));
var RR1984 = parseInt(readFileSync('./Pages/RR1984.txt', { encoding: 'utf8' }));
var MD1988 = parseInt(readFileSync('./Pages/MD1988.txt', { encoding: 'utf8' }));
var GB1988 = parseInt(readFileSync('./Pages/GB1988.txt', { encoding: 'utf8' }));
var BC1992 = parseInt(readFileSync('./Pages/BC1992.txt', { encoding: 'utf8' }));
var GB1992 = parseInt(readFileSync('./Pages/GB1992.txt', { encoding: 'utf8' }));
var RP1992 = parseInt(readFileSync('./Pages/RP1992.txt', { encoding: 'utf8' }));
var RP1996 = parseInt(readFileSync('./Pages/RP1996.txt', { encoding: 'utf8' }));
var BC1996 = parseInt(readFileSync('./Pages/BC1996.txt', { encoding: 'utf8' }));
var BD1996 = parseInt(readFileSync('./Pages/BD1996.txt', { encoding: 'utf8' }));
var GB2000 = parseInt(readFileSync('./Pages/GB2000.txt', { encoding: 'utf8' }));
var AG2000 = parseInt(readFileSync('./Pages/AG2000.txt', { encoding: 'utf8' }));
var RN2000 = parseInt(readFileSync('./Pages/RN2000.txt', { encoding: 'utf8' }));
var GB2004 = parseInt(readFileSync('./Pages/GB2004.txt', { encoding: 'utf8' }));
var JK2004 = parseInt(readFileSync('./Pages/JK2004.txt', { encoding: 'utf8' }));
var RN2004 = parseInt(readFileSync('./Pages/RN2004.txt', { encoding: 'utf8' }));
var BO2008 = parseInt(readFileSync('./Pages/BO2008.txt', { encoding: 'utf8' }));
var JM2008 = parseInt(readFileSync('./Pages/JM2008.txt', { encoding: 'utf8' }));
var BO2012 = parseInt(readFileSync('./Pages/BO2012.txt', { encoding: 'utf8' }));
var MR2012 = parseInt(readFileSync('./Pages/MR2012.txt', { encoding: 'utf8' }));
var DT2016 = parseInt(readFileSync('./Pages/DT2016.txt', { encoding: 'utf8' }));
var HC2016 = parseInt(readFileSync('./Pages/HC2016.txt', { encoding: 'utf8' }));
var GJ2016 = parseInt(readFileSync('./Pages/GJ2016.txt', { encoding: 'utf8' }));
var JS2016 = parseInt(readFileSync('./Pages/JS2016.txt', { encoding: 'utf8' }));
var JB2020 = parseInt(readFileSync('./Pages/JB2020.txt', { encoding: 'utf8' }));
var DT2020 = parseInt(readFileSync('./Pages/DT2020.txt', { encoding: 'utf8' }));
var JJ2020 = parseInt(readFileSync('./Pages/JJ2020.txt', { encoding: 'utf8' }));

app.get('/JA1796', (req, res) => {res.status(200).send({value:JA1796})});
app.get('/TJ1796', (req, res) => {res.status(200).send({value:TJ1796})});
app.get('/TJ1800', (req, res) => {res.status(200).send({value:TJ1800})});
app.get('/JA1800', (req, res) => {res.status(200).send({value:JA1800})});
app.get('/AB1800', (req, res) => {res.status(200).send({value:AB1800})});
app.get('/TJ1804', (req, res) => {res.status(200).send({value:TJ1804})});
app.get('/CP1804', (req, res) => {res.status(200).send({value:CP1804})});
app.get('/JM1808', (req, res) => {res.status(200).send({value:JM1808})});
app.get('/CP1808', (req, res) => {res.status(200).send({value:CP1808})});
app.get('/JM1812', (req, res) => {res.status(200).send({value:JM1812})});
app.get('/DC1812', (req, res) => {res.status(200).send({value:DC1812})});
app.get('/JM1816', (req, res) => {res.status(200).send({value:JM1816})});
app.get('/RK1816', (req, res) => {res.status(200).send({value:RK1816})});
app.get('/JM1820', (req, res) => {res.status(200).send({value:JM1820})});
app.get('/JQ1820', (req, res) => {res.status(200).send({value:JQ1820})});
app.get('/JQ1824', (req, res) => {res.status(200).send({value:JQ1824})});
app.get('/AJ1824', (req, res) => {res.status(200).send({value:AJ1824})});
app.get('/WC1824', (req, res) => {res.status(200).send({value:WC1824})});
app.get('/HC1824', (req, res) => {res.status(200).send({value:HC1824})});
app.get('/AJ1828', (req, res) => {res.status(200).send({value:AJ1828})});
app.get('/JQ1828', (req, res) => {res.status(200).send({value:JQ1828})});
app.get('/AJ1832', (req, res) => {res.status(200).send({value:AJ1832})});
app.get('/HC1832', (req, res) => {res.status(200).send({value:HC1832})});
app.get('/WW1832', (req, res) => {res.status(200).send({value:WW1832})});
app.get('/JF1832', (req, res) => {res.status(200).send({value:JF1832})});
app.get('/MVB1836', (req, res) => {res.status(200).send({value:MVB1836})});
app.get('/WHH1836', (req, res) => {res.status(200).send({value:WHH1836})});
app.get('/HW1836', (req, res) => {res.status(200).send({value:HW1836})});
app.get('/WM1836', (req, res) => {res.status(200).send({value:WM1836})});
app.get('/DW1836', (req, res) => {res.status(200).send({value:DW1836})});
app.get('/WHH1840', (req, res) => {res.status(200).send({value:WHH1840})});
app.get('/MVB1840', (req, res) => {res.status(200).send({value:MVB1840})});
app.get('/JP1844', (req, res) => {res.status(200).send({value:JP1844})});
app.get('/HC1844', (req, res) => {res.status(200).send({value:HC1844})});
app.get('/ZT1848', (req, res) => {res.status(200).send({value:ZT1848})});
app.get('/LC1848', (req, res) => {res.status(200).send({value:LC1848})});
app.get('/MVB1848', (req, res) => {res.status(200).send({value:MVB1848})});
app.get('/FP1852', (req, res) => {res.status(200).send({value:FP1852})});
app.get('/WS1852', (req, res) => {res.status(200).send({value:WS1852})});
app.get('/JH1852', (req, res) => {res.status(200).send({value:JH1852})});
app.get('/JB1856', (req, res) => {res.status(200).send({value:JB1856})});
app.get('/JF1856', (req, res) => {res.status(200).send({value:JF1856})});
app.get('/MF1856', (req, res) => {res.status(200).send({value:MF1856})});
app.get('/AL1860', (req, res) => {res.status(200).send({value:AL1860})});
app.get('/SD1860', (req, res) => {res.status(200).send({value:SD1860})});
app.get('/JBRIDGE1860', (req, res) => {res.status(200).send({value:JBRIDGE1860})});
app.get('/JBELL1860', (req, res) => {res.status(200).send({value:JBELL1860})});
app.get('/AL1864', (req, res) => {res.status(200).send({value:AL1864})});
app.get('/GM1864', (req, res) => {res.status(200).send({value:GM1864})});
app.get('/UG1868', (req, res) => {res.status(200).send({value:UG1868})});
app.get('/HS1868', (req, res) => {res.status(200).send({value:HS1868})});
app.get('/UG1872', (req, res) => {res.status(200).send({value:UG1872})});
app.get('/HG1872', (req, res) => {res.status(200).send({value:HG1872})});
app.get('/RH1876', (req, res) => {res.status(200).send({value:RH1876})});
app.get('/ST1876', (req, res) => {res.status(200).send({value:ST1876})});
app.get('/JG1880', (req, res) => {res.status(200).send({value:JG1880})});
app.get('/WSH1880', (req, res) => {res.status(200).send({value:WSH1880})});
app.get('/GC1884', (req, res) => {res.status(200).send({value:GC1884})});
app.get('/JB1884', (req, res) => {res.status(200).send({value:JB1884})});
app.get('/BH1888', (req, res) => {res.status(200).send({value:BH1888})});
app.get('/GC1888', (req, res) => {res.status(200).send({value:GC1888})});
app.get('/GC1892', (req, res) => {res.status(200).send({value:GC1892})});
app.get('/BH1892', (req, res) => {res.status(200).send({value:BH1892})});
app.get('/JW1892', (req, res) => {res.status(200).send({value:JW1892})});
app.get('/WJB1896', (req, res) => {res.status(200).send({value:WJB1896})});
app.get('/WM1896', (req, res) => {res.status(200).send({value:WM1896})});
app.get('/WJB1900', (req, res) => {res.status(200).send({value:WJB1900})});
app.get('/WM1900', (req, res) => {res.status(200).send({value:WM1900})});
app.get('/TR1904', (req, res) => {res.status(200).send({value:TR1904})});
app.get('/AP1904', (req, res) => {res.status(200).send({value:AP1904})});
app.get('/WT1908', (req, res) => {res.status(200).send({value:WT1908})});
app.get('/WJB1908', (req, res) => {res.status(200).send({value:WJB1908})});
app.get('/WW1912', (req, res) => {res.status(200).send({value:WW1912})});
app.get('/WT1912', (req, res) => {res.status(200).send({value:WT1912})});
app.get('/TR1912', (req, res) => {res.status(200).send({value:TR1912})});
app.get('/ED1912', (req, res) => {res.status(200).send({value:ED1912})});
app.get('/CEH1916', (req, res) => {res.status(200).send({value:CEH1916})});
app.get('/WW1916', (req, res) => {res.status(200).send({value:WW1916})});
app.get('/JC1920', (req, res) => {res.status(200).send({value:JC1920})});
app.get('/WH1920', (req, res) => {res.status(200).send({value:WH1920})});
app.get('/CC1924', (req, res) => {res.status(200).send({value:CC1924})});
app.get('/JD1924', (req, res) => {res.status(200).send({value:JD1924})});
app.get('/RF1924', (req, res) => {res.status(200).send({value:RF1924})});
app.get('/HH1928', (req, res) => {res.status(200).send({value:HH1928})});
app.get('/AS1928', (req, res) => {res.status(200).send({value:AS1928})});
app.get('/FDR1932', (req, res) => {res.status(200).send({value:FDR1932})});
app.get('/HH1932', (req, res) => {res.status(200).send({value:HH1932})});
app.get('/AL1936', (req, res) => {res.status(200).send({value:AL1936})});
app.get('/FDR1936', (req, res) => {res.status(200).send({value:FDR1936})});
app.get('/FDR1940', (req, res) => {res.status(200).send({value:FDR1940})});
app.get('/WW1940', (req, res) => {res.status(200).send({value:WW1940})});
app.get('/FDR1944', (req, res) => {res.status(200).send({value:FDR1944})});
app.get('/TD1944', (req, res) => {res.status(200).send({value:TD1944})});
app.get('/HT1948', (req, res) => {res.status(200).send({value:HT1948})});
app.get('/TD1948', (req, res) => {res.status(200).send({value:TD1948})});
app.get('/ST1948', (req, res) => {res.status(200).send({value:ST1948})});
app.get('/DE1952', (req, res) => {res.status(200).send({value:DE1952})});
app.get('/AS1952', (req, res) => {res.status(200).send({value:AS1952})});
app.get('/DE1956', (req, res) => {res.status(200).send({value:DE1956})});
app.get('/AS1956', (req, res) => {res.status(200).send({value:AS1956})});
app.get('/JFK1960', (req, res) => {res.status(200).send({value:JFK1960})});
app.get('/RN1960', (req, res) => {res.status(200).send({value:RN1960})});
app.get('/LBJ1964', (req, res) => {res.status(200).send({value:LBJ1964})});
app.get('/BG1964', (req, res) => {res.status(200).send({value:BG1964})});
app.get('/RN1968', (req, res) => {res.status(200).send({value:RN1968})});
app.get('/HH1968', (req, res) => {res.status(200).send({value:HH1968})});
app.get('/GW1968', (req, res) => {res.status(200).send({value:GW1968})});
app.get('/RN1972', (req, res) => {res.status(200).send({value:RN1972})});
app.get('/GM1972', (req, res) => {res.status(200).send({value:GM1972})});
app.get('/GF1976', (req, res) => {res.status(200).send({value:GF1976})});
app.get('/JC1976', (req, res) => {res.status(200).send({value:JC1976})});
app.get('/RR1980', (req, res) => {res.status(200).send({value:RR1980})});
app.get('/JC1980', (req, res) => {res.status(200).send({value:JC1980})});
app.get('/JA1980', (req, res) => {res.status(200).send({value:JA1980})});
app.get('/WM1984', (req, res) => {res.status(200).send({value:WM1984})});
app.get('/RR1984', (req, res) => {res.status(200).send({value:RR1984})});
app.get('/MD1988', (req, res) => {res.status(200).send({value:MD1988})});
app.get('/GB1988', (req, res) => {res.status(200).send({value:GB1988})});
app.get('/BC1992', (req, res) => {res.status(200).send({value:BC1992})});
app.get('/GB1992', (req, res) => {res.status(200).send({value:GB1992})});
app.get('/RP1992', (req, res) => {res.status(200).send({value:RP1992})});
app.get('/RP1996', (req, res) => {res.status(200).send({value:RP1996})});
app.get('/BC1996', (req, res) => {res.status(200).send({value:BC1996})});
app.get('/BD1996', (req, res) => {res.status(200).send({value:BD1996})});
app.get('/GB2000', (req, res) => {res.status(200).send({value:GB2000})});
app.get('/AG2000', (req, res) => {res.status(200).send({value:AG2000})});
app.get('/RN2000', (req, res) => {res.status(200).send({value:RN2000})});
app.get('/GB2004', (req, res) => {res.status(200).send({value:GB2004})});
app.get('/JK2004', (req, res) => {res.status(200).send({value:JK2004})});
app.get('/RN2004', (req, res) => {res.status(200).send({value:RN2004})});
app.get('/BO2008', (req, res) => {res.status(200).send({value:BO2008})});
app.get('/JM2008', (req, res) => {res.status(200).send({value:JM2008})});
app.get('/BO2012', (req, res) => {res.status(200).send({value:BO2012})});
app.get('/MR2012', (req, res) => {res.status(200).send({value:MR2012})});
app.get('/DT2016', (req, res) => {res.status(200).send({value:DT2016})});
app.get('/HC2016', (req, res) => {res.status(200).send({value:HC2016})});
app.get('/GJ2016', (req, res) => {res.status(200).send({value:GJ2016})});
app.get('/JS2016', (req, res) => {res.status(200).send({value:JS2016})});
app.get('/JB2020', (req, res) => {res.status(200).send({value:JB2020})});
app.get('/DT2020', (req, res) => {res.status(200).send({value:DT2020})});
app.get('/JJ2020', (req, res) => {res.status(200).send({value:JJ2020})});

app.post('/JA1796', (req, res) => {
    res.status(200).send({
        value: req.body.value
    });
    JA1796=JA1796+req.body.value;
    if(JA1796 < 0){
        JA1796= 0
    } 
    writeFileSync('./Pages/JA1796.txt', (JA1796).toString() )
})
app.post('/TJ1796', (req, res) => {res.status(200).send({value: req.body.value});TJ1796=TJ1796+req.body.value;if(TJ1796< 0){TJ1796= 0} writeFileSync('./Pages/TJ1796.txt', (TJ1796).toString() )})
app.post('/TJ1800', (req, res) => {res.status(200).send({value: req.body.value});TJ1800=TJ1800+req.body.value;if(TJ1800< 0){TJ1800= 0} writeFileSync('./Pages/TJ1800.txt', (TJ1800).toString() )})
app.post('/JA1800', (req, res) => {res.status(200).send({value: req.body.value});JA1800=JA1800+req.body.value;if(JA1800< 0){JA1800= 0} writeFileSync('./Pages/JA1800.txt', (JA1800).toString() )})
app.post('/AB1800', (req, res) => {res.status(200).send({value: req.body.value});AB1800=AB1800+req.body.value;if(AB1800< 0){AB1800= 0} writeFileSync('./Pages/AB1800.txt', (AB1800).toString() )})
app.post('/TJ1804', (req, res) => {res.status(200).send({value: req.body.value});TJ1804=TJ1804+req.body.value;if(TJ1804< 0){TJ1804= 0} writeFileSync('./Pages/TJ1804.txt', (TJ1804).toString() )})
app.post('/CP1804', (req, res) => {res.status(200).send({value: req.body.value});CP1804=CP1804+req.body.value;if(CP1804< 0){CP1804= 0} writeFileSync('./Pages/CP1804.txt', (CP1804).toString() )})
app.post('/JM1808', (req, res) => {res.status(200).send({value: req.body.value});JM1808=JM1808+req.body.value;if(JM1808< 0){JM1808= 0} writeFileSync('./Pages/JM1808.txt', (JM1808).toString() )})
app.post('/CP1808', (req, res) => {res.status(200).send({value: req.body.value});CP1808=CP1808+req.body.value;if(CP1808< 0){CP1808= 0} writeFileSync('./Pages/CP1808.txt', (CP1808).toString() )})
app.post('/JM1812', (req, res) => {res.status(200).send({value: req.body.value});JM1812=JM1812+req.body.value;if(JM1812< 0){JM1812= 0} writeFileSync('./Pages/JM1812.txt', (JM1812).toString() )})
app.post('/DC1812', (req, res) => {res.status(200).send({value: req.body.value});DC1812=DC1812+req.body.value;if(DC1812< 0){DC1812= 0} writeFileSync('./Pages/DC1812.txt', (DC1812).toString() )})
app.post('/JM1816', (req, res) => {res.status(200).send({value: req.body.value});JM1816=JM1816+req.body.value;if(JM1816< 0){JM1816= 0} writeFileSync('./Pages/JM1816.txt', (JM1816).toString() )})
app.post('/RK1816', (req, res) => {res.status(200).send({value: req.body.value});RK1816=RK1816+req.body.value;if(RK1816< 0){RK1816= 0} writeFileSync('./Pages/RK1816.txt', (RK1816).toString() )})
app.post('/JM1820', (req, res) => {res.status(200).send({value: req.body.value});JM1820=JM1820+req.body.value;if(JM1820< 0){JM1820= 0} writeFileSync('./Pages/JM1820.txt', (JM1820).toString() )})
app.post('/JQ1820', (req, res) => {res.status(200).send({value: req.body.value});JQ1820=JQ1820+req.body.value;if(JQ1820< 0){JQ1820= 0} writeFileSync('./Pages/JQ1820.txt', (JQ1820).toString() )})
app.post('/JQ1824', (req, res) => {res.status(200).send({value: req.body.value});JQ1824=JQ1824+req.body.value;if(JQ1824< 0){JQ1824= 0} writeFileSync('./Pages/JQ1824.txt', (JQ1824).toString() )})
app.post('/AJ1824', (req, res) => {res.status(200).send({value: req.body.value});AJ1824=AJ1824+req.body.value;if(AJ1824< 0){AJ1824= 0} writeFileSync('./Pages/AJ1824.txt', (AJ1824).toString() )})
app.post('/WC1824', (req, res) => {res.status(200).send({value: req.body.value});WC1824=WC1824+req.body.value;if(WC1824< 0){WC1824= 0} writeFileSync('./Pages/WC1824.txt', (WC1824).toString() )})
app.post('/HC1824', (req, res) => {res.status(200).send({value: req.body.value});HC1824=HC1824+req.body.value;if(HC1824< 0){HC1824= 0} writeFileSync('./Pages/HC1824.txt', (HC1824).toString() )})
app.post('/AJ1828', (req, res) => {res.status(200).send({value: req.body.value});AJ1828=AJ1828+req.body.value;if(AJ1828< 0){AJ1828= 0} writeFileSync('./Pages/AJ1828.txt', (AJ1828).toString() )})
app.post('/JQ1828', (req, res) => {res.status(200).send({value: req.body.value});JQ1828=JQ1828+req.body.value;if(JQ1828< 0){JQ1828= 0} writeFileSync('./Pages/JQ1828.txt', (JQ1828).toString() )})
app.post('/AJ1832', (req, res) => {res.status(200).send({value: req.body.value});AJ1832=AJ1832+req.body.value;if(AJ1832< 0){AJ1832= 0} writeFileSync('./Pages/AJ1832.txt', (AJ1832).toString() )})
app.post('/HC1832', (req, res) => {res.status(200).send({value: req.body.value});HC1832=HC1832+req.body.value;if(HC1832< 0){HC1832= 0} writeFileSync('./Pages/HC1832.txt', (HC1832).toString() )})
app.post('/WW1832', (req, res) => {res.status(200).send({value: req.body.value});WW1832=WW1832+req.body.value;if(WW1832< 0){WW1832= 0} writeFileSync('./Pages/WW1832.txt', (WW1832).toString() )})
app.post('/JF1832', (req, res) => {res.status(200).send({value: req.body.value});JF1832=JF1832+req.body.value;if(JF1832< 0){JF1832= 0} writeFileSync('./Pages/JF1832.txt', (JF1832).toString() )})
app.post('/MVB1836', (req, res) => {res.status(200).send({value: req.body.value});MVB1836=MVB1836+req.body.value;if(MVB1836< 0){MVB1836= 0} writeFileSync('./Pages/MVB1836.txt', (MVB1836).toString() )})
app.post('/WHH1836', (req, res) => {res.status(200).send({value: req.body.value});WHH1836=WHH1836+req.body.value;if(WHH1836< 0){WHH1836= 0} writeFileSync('./Pages/WHH1836.txt', (WHH1836).toString() )})
app.post('/HW1836', (req, res) => {res.status(200).send({value: req.body.value});HW1836=HW1836+req.body.value;if(HW1836< 0){HW1836= 0} writeFileSync('./Pages/HW1836.txt', (HW1836).toString() )})
app.post('/WM1836', (req, res) => {res.status(200).send({value: req.body.value});WM1836=WM1836+req.body.value;if(WM1836< 0){WM1836= 0} writeFileSync('./Pages/WM1836.txt', (WM1836).toString() )})
app.post('/DW1836', (req, res) => {res.status(200).send({value: req.body.value});DW1836=DW1836+req.body.value;if(DW1836< 0){DW1836= 0} writeFileSync('./Pages/DW1836.txt', (DW1836).toString() )})
app.post('/WHH1840', (req, res) => {res.status(200).send({value: req.body.value});WHH1840=WHH1840+req.body.value;if(WHH1840< 0){WHH1840= 0} writeFileSync('./Pages/WHH1840.txt', (WHH1840).toString() )})
app.post('/MVB1840', (req, res) => {res.status(200).send({value: req.body.value});MVB1840=MVB1840+req.body.value;if(MVB1840< 0){MVB1840= 0} writeFileSync('./Pages/MVB1840.txt', (MVB1840).toString() )})
app.post('/JP1844', (req, res) => {res.status(200).send({value: req.body.value});JP1844=JP1844+req.body.value;if(JP1844< 0){JP1844= 0} writeFileSync('./Pages/JP1844.txt', (JP1844).toString() )})
app.post('/HC1844', (req, res) => {res.status(200).send({value: req.body.value});HC1844=HC1844+req.body.value;if(HC1844< 0){HC1844= 0} writeFileSync('./Pages/HC1844.txt', (HC1844).toString() )})
app.post('/ZT1848', (req, res) => {res.status(200).send({value: req.body.value});ZT1848=ZT1848+req.body.value;if(ZT1848< 0){ZT1848= 0} writeFileSync('./Pages/ZT1848.txt', (ZT1848).toString() )})
app.post('/LC1848', (req, res) => {res.status(200).send({value: req.body.value});LC1848=LC1848+req.body.value;if(LC1848< 0){LC1848= 0} writeFileSync('./Pages/LC1848.txt', (LC1848).toString() )})
app.post('/MVB1848', (req, res) => {res.status(200).send({value: req.body.value});MVB1848=MVB1848+req.body.value;if(MVB1848< 0){MVB1848= 0} writeFileSync('./Pages/MVB1848.txt', (MVB1848).toString() )})
app.post('/FP1852', (req, res) => {res.status(200).send({value: req.body.value});FP1852=FP1852+req.body.value;if(FP1852< 0){FP1852= 0} writeFileSync('./Pages/FP1852.txt', (FP1852).toString() )})
app.post('/WS1852', (req, res) => {res.status(200).send({value: req.body.value});WS1852=WS1852+req.body.value;if(WS1852< 0){WS1852= 0} writeFileSync('./Pages/WS1852.txt', (WS1852).toString() )})
app.post('/JH1852', (req, res) => {res.status(200).send({value: req.body.value});JH1852=JH1852+req.body.value;if(JH1852< 0){JH1852= 0} writeFileSync('./Pages/JH1852.txt', (JH1852).toString() )})
app.post('/JB1856', (req, res) => {res.status(200).send({value: req.body.value});JB1856=JB1856+req.body.value;if(JB1856< 0){JB1856= 0} writeFileSync('./Pages/JB1856.txt', (JB1856).toString() )})
app.post('/JF1856', (req, res) => {res.status(200).send({value: req.body.value});JF1856=JF1856+req.body.value;if(JF1856< 0){JF1856= 0} writeFileSync('./Pages/JF1856.txt', (JF1856).toString() )})
app.post('/MF1856', (req, res) => {res.status(200).send({value: req.body.value});MF1856=MF1856+req.body.value;if(MF1856< 0){MF1856= 0} writeFileSync('./Pages/MF1856.txt', (MF1856).toString() )})
app.post('/AL1860', (req, res) => {res.status(200).send({value: req.body.value});AL1860=AL1860+req.body.value;if(AL1860< 0){AL1860= 0} writeFileSync('./Pages/AL1860.txt', (AL1860).toString() )})
app.post('/SD1860', (req, res) => {res.status(200).send({value: req.body.value});SD1860=SD1860+req.body.value;if(SD1860< 0){SD1860= 0} writeFileSync('./Pages/SD1860.txt', (SD1860).toString() )})
app.post('/JBRIDGE1860', (req, res) => {res.status(200).send({value: req.body.value});JBRIDGE1860=JBRIDGE1860+req.body.value;if(JBRIDGE1860< 0){JBRIDGE1860= 0} writeFileSync('./Pages/JBRIDGE1860.txt', (JBRIDGE1860).toString() )})
app.post('/JBELL1860', (req, res) => {res.status(200).send({value: req.body.value});JBELL1860=JBELL1860+req.body.value;if(JBELL1860< 0){JBELL1860= 0} writeFileSync('./Pages/JBELL1860.txt', (JBELL1860).toString() )})
app.post('/AL1864', (req, res) => {res.status(200).send({value: req.body.value});AL1864=AL1864+req.body.value;if(AL1864< 0){AL1864= 0} writeFileSync('./Pages/AL1864.txt', (AL1864).toString() )})
app.post('/GM1864', (req, res) => {res.status(200).send({value: req.body.value});GM1864=GM1864+req.body.value;if(GM1864< 0){GM1864= 0} writeFileSync('./Pages/GM1864.txt', (GM1864).toString() )})
app.post('/UG1868', (req, res) => {res.status(200).send({value: req.body.value});UG1868=UG1868+req.body.value;if(UG1868< 0){UG1868= 0} writeFileSync('./Pages/UG1868.txt', (UG1868).toString() )})
app.post('/HS1868', (req, res) => {res.status(200).send({value: req.body.value});HS1868=HS1868+req.body.value;if(HS1868< 0){HS1868= 0} writeFileSync('./Pages/HS1868.txt', (HS1868).toString() )})
app.post('/UG1872', (req, res) => {res.status(200).send({value: req.body.value});UG1872=UG1872+req.body.value;if(UG1872< 0){UG1872= 0} writeFileSync('./Pages/UG1872.txt', (UG1872).toString() )})
app.post('/HG1872', (req, res) => {res.status(200).send({value: req.body.value});HG1872=HG1872+req.body.value;if(HG1872< 0){HG1872= 0} writeFileSync('./Pages/HG1872.txt', (HG1872).toString() )})
app.post('/RH1876', (req, res) => {res.status(200).send({value: req.body.value});RH1876=RH1876+req.body.value;if(RH1876< 0){RH1876= 0} writeFileSync('./Pages/RH1876.txt', (RH1876).toString() )})
app.post('/ST1876', (req, res) => {res.status(200).send({value: req.body.value});ST1876=ST1876+req.body.value;if(ST1876< 0){ST1876= 0} writeFileSync('./Pages/ST1876.txt', (ST1876).toString() )})
app.post('/JG1880', (req, res) => {res.status(200).send({value: req.body.value});JG1880=JG1880+req.body.value;if(JG1880< 0){JG1880= 0} writeFileSync('./Pages/JG1880.txt', (JG1880).toString() )})
app.post('/WSH1880', (req, res) => {res.status(200).send({value: req.body.value});WSH1880=WSH1880+req.body.value;if(WSH1880< 0){WSH1880= 0} writeFileSync('./Pages/WSH1880.txt', (WSH1880).toString() )})
app.post('/GC1884', (req, res) => {res.status(200).send({value: req.body.value});GC1884=GC1884+req.body.value;if(GC1884< 0){GC1884= 0} writeFileSync('./Pages/GC1884.txt', (GC1884).toString() )})
app.post('/JB1884', (req, res) => {res.status(200).send({value: req.body.value});JB1884=JB1884+req.body.value;if(JB1884< 0){JB1884= 0} writeFileSync('./Pages/JB1884.txt', (JB1884).toString() )})
app.post('/BH1888', (req, res) => {res.status(200).send({value: req.body.value});BH1888=BH1888+req.body.value;if(BH1888< 0){BH1888= 0} writeFileSync('./Pages/BH1888.txt', (BH1888).toString() )})
app.post('/GC1888', (req, res) => {res.status(200).send({value: req.body.value});GC1888=GC1888+req.body.value;if(GC1888< 0){GC1888= 0} writeFileSync('./Pages/GC1888.txt', (GC1888).toString() )})
app.post('/GC1892', (req, res) => {res.status(200).send({value: req.body.value});GC1892=GC1892+req.body.value;if(GC1892< 0){GC1892= 0} writeFileSync('./Pages/GC1892.txt', (GC1892).toString() )})
app.post('/BH1892', (req, res) => {res.status(200).send({value: req.body.value});BH1892=BH1892+req.body.value;if(BH1892< 0){BH1892= 0} writeFileSync('./Pages/BH1892.txt', (BH1892).toString() )})
app.post('/JW1892', (req, res) => {res.status(200).send({value: req.body.value});JW1892=JW1892+req.body.value;if(JW1892< 0){JW1892= 0} writeFileSync('./Pages/JW1892.txt', (JW1892).toString() )})
app.post('/WJB1896', (req, res) => {res.status(200).send({value: req.body.value});WJB1896=WJB1896+req.body.value;if(WJB1896< 0){WJB1896= 0} writeFileSync('./Pages/WJB1896.txt', (WJB1896).toString() )})
app.post('/WM1896', (req, res) => {res.status(200).send({value: req.body.value});WM1896=WM1896+req.body.value;if(WM1896< 0){WM1896= 0} writeFileSync('./Pages/WM1896.txt', (WM1896).toString() )})
app.post('/WJB1900', (req, res) => {res.status(200).send({value: req.body.value});WJB1900=WJB1900+req.body.value;if(WJB1900< 0){WJB1900= 0} writeFileSync('./Pages/WJB1900.txt', (WJB1900).toString() )})
app.post('/WM1900', (req, res) => {res.status(200).send({value: req.body.value});WM1900=WM1900+req.body.value;if(WM1900< 0){WM1900= 0} writeFileSync('./Pages/WM1900.txt', (WM1900).toString() )})
app.post('/TR1904', (req, res) => {res.status(200).send({value: req.body.value});TR1904=TR1904+req.body.value;if(TR1904< 0){TR1904= 0} writeFileSync('./Pages/TR1904.txt', (TR1904).toString() )})
app.post('/AP1904', (req, res) => {res.status(200).send({value: req.body.value});AP1904=AP1904+req.body.value;if(AP1904< 0){AP1904= 0} writeFileSync('./Pages/AP1904.txt', (AP1904).toString() )})
app.post('/WT1908', (req, res) => {res.status(200).send({value: req.body.value});WT1908=WT1908+req.body.value;if(WT1908< 0){WT1908= 0} writeFileSync('./Pages/WT1908.txt', (WT1908).toString() )})
app.post('/WJB1908', (req, res) => {res.status(200).send({value: req.body.value});WJB1908=WJB1908+req.body.value;if(WJB1908< 0){WJB1908= 0} writeFileSync('./Pages/WJB1908.txt', (WJB1908).toString() )})
app.post('/WW1912', (req, res) => {res.status(200).send({value: req.body.value});WW1912=WW1912+req.body.value;if(WW1912< 0){WW1912= 0} writeFileSync('./Pages/WW1912.txt', (WW1912).toString() )})
app.post('/WT1912', (req, res) => {res.status(200).send({value: req.body.value});WT1912=WT1912+req.body.value;if(WT1912< 0){WT1912= 0} writeFileSync('./Pages/WT1912.txt', (WT1912).toString() )})
app.post('/TR1912', (req, res) => {res.status(200).send({value: req.body.value});TR1912=TR1912+req.body.value;if(TR1912< 0){TR1912= 0} writeFileSync('./Pages/TR1912.txt', (TR1912).toString() )})
app.post('/ED1912', (req, res) => {res.status(200).send({value: req.body.value});ED1912=ED1912+req.body.value;if(ED1912< 0){ED1912= 0} writeFileSync('./Pages/ED1912.txt', (ED1912).toString() )})
app.post('/CEH1916', (req, res) => {res.status(200).send({value: req.body.value});CEH1916=CEH1916+req.body.value;if(CEH1916< 0){CEH1916= 0} writeFileSync('./Pages/CEH1916.txt', (CEH1916).toString() )})
app.post('/WW1916', (req, res) => {res.status(200).send({value: req.body.value});WW1916=WW1916+req.body.value;if(WW1916< 0){WW1916= 0} writeFileSync('./Pages/WW1916.txt', (WW1916).toString() )})
app.post('/JC1920', (req, res) => {res.status(200).send({value: req.body.value});JC1920=JC1920+req.body.value;if(JC1920< 0){JC1920= 0} writeFileSync('./Pages/JC1920.txt', (JC1920).toString() )})
app.post('/WH1920', (req, res) => {res.status(200).send({value: req.body.value});WH1920=WH1920+req.body.value;if(WH1920< 0){WH1920= 0} writeFileSync('./Pages/WH1920.txt', (WH1920).toString() )})
app.post('/CC1924', (req, res) => {res.status(200).send({value: req.body.value});CC1924=CC1924+req.body.value;if(CC1924< 0){CC1924= 0} writeFileSync('./Pages/CC1924.txt', (CC1924).toString() )})
app.post('/JD1924', (req, res) => {res.status(200).send({value: req.body.value});JD1924=JD1924+req.body.value;if(JD1924< 0){JD1924= 0} writeFileSync('./Pages/JD1924.txt', (JD1924).toString() )})
app.post('/RF1924', (req, res) => {res.status(200).send({value: req.body.value});RF1924=RF1924+req.body.value;if(RF1924< 0){RF1924= 0} writeFileSync('./Pages/RF1924.txt', (RF1924).toString() )})
app.post('/HH1928', (req, res) => {res.status(200).send({value: req.body.value});HH1928=HH1928+req.body.value;if(HH1928< 0){HH1928= 0} writeFileSync('./Pages/HH1928.txt', (HH1928).toString() )})
app.post('/AS1928', (req, res) => {res.status(200).send({value: req.body.value});AS1928=AS1928+req.body.value;if(AS1928< 0){AS1928= 0} writeFileSync('./Pages/AS1928.txt', (AS1928).toString() )})
app.post('/FDR1932', (req, res) => {res.status(200).send({value: req.body.value});FDR1932=FDR1932+req.body.value;if(FDR1932< 0){FDR1932= 0} writeFileSync('./Pages/FDR1932.txt', (FDR1932).toString() )})
app.post('/HH1932', (req, res) => {res.status(200).send({value: req.body.value});HH1932=HH1932+req.body.value;if(HH1932< 0){HH1932= 0} writeFileSync('./Pages/HH1932.txt', (HH1932).toString() )})
app.post('/AL1936', (req, res) => {res.status(200).send({value: req.body.value});AL1936=AL1936+req.body.value;if(AL1936< 0){AL1936= 0} writeFileSync('./Pages/AL1936.txt', (AL1936).toString() )})
app.post('/FDR1936', (req, res) => {res.status(200).send({value: req.body.value});FDR1936=FDR1936+req.body.value;if(FDR1936< 0){FDR1936= 0} writeFileSync('./Pages/FDR1936.txt', (FDR1936).toString() )})
app.post('/FDR1940', (req, res) => {res.status(200).send({value: req.body.value});FDR1940=FDR1940+req.body.value;if(FDR1940< 0){FDR1940= 0} writeFileSync('./Pages/FDR1940.txt', (FDR1940).toString() )})
app.post('/WW1940', (req, res) => {res.status(200).send({value: req.body.value});WW1940=WW1940+req.body.value;if(WW1940< 0){WW1940= 0} writeFileSync('./Pages/WW1940.txt', (WW1940).toString() )})
app.post('/FDR1944', (req, res) => {res.status(200).send({value: req.body.value});FDR1944=FDR1944+req.body.value;if(FDR1944< 0){FDR1944= 0} writeFileSync('./Pages/FDR1944.txt', (FDR1944).toString() )})
app.post('/TD1944', (req, res) => {res.status(200).send({value: req.body.value});TD1944=TD1944+req.body.value;if(TD1944< 0){TD1944= 0} writeFileSync('./Pages/TD1944.txt', (TD1944).toString() )})
app.post('/HT1948', (req, res) => {res.status(200).send({value: req.body.value});HT1948=HT1948+req.body.value;if(HT1948< 0){HT1948= 0} writeFileSync('./Pages/HT1948.txt', (HT1948).toString() )})
app.post('/TD1948', (req, res) => {res.status(200).send({value: req.body.value});TD1948=TD1948+req.body.value;if(TD1948< 0){TD1948= 0} writeFileSync('./Pages/TD1948.txt', (TD1948).toString() )})
app.post('/ST1948', (req, res) => {res.status(200).send({value: req.body.value});ST1948=ST1948+req.body.value;if(ST1948< 0){ST1948= 0} writeFileSync('./Pages/ST1948.txt', (ST1948).toString() )})
app.post('/DE1952', (req, res) => {res.status(200).send({value: req.body.value});DE1952=DE1952+req.body.value;if(DE1952< 0){DE1952= 0} writeFileSync('./Pages/DE1952.txt', (DE1952).toString() )})
app.post('/AS1952', (req, res) => {res.status(200).send({value: req.body.value});AS1952=AS1952+req.body.value;if(AS1952< 0){AS1952= 0} writeFileSync('./Pages/AS1952.txt', (AS1952).toString() )})
app.post('/DE1956', (req, res) => {res.status(200).send({value: req.body.value});DE1956=DE1956+req.body.value;if(DE1956< 0){DE1956= 0} writeFileSync('./Pages/DE1956.txt', (DE1956).toString() )})
app.post('/AS1956', (req, res) => {res.status(200).send({value: req.body.value});AS1956=AS1956+req.body.value;if(AS1956< 0){AS1956= 0} writeFileSync('./Pages/AS1956.txt', (AS1956).toString() )})
app.post('/JFK1960', (req, res) => {res.status(200).send({value: req.body.value});JFK1960=JFK1960+req.body.value;if(JFK1960< 0){JFK1960= 0} writeFileSync('./Pages/JFK1960.txt', (JFK1960).toString() )})
app.post('/RN1960', (req, res) => {res.status(200).send({value: req.body.value});RN1960=RN1960+req.body.value;if(RN1960< 0){RN1960= 0} writeFileSync('./Pages/RN1960.txt', (RN1960).toString() )})
app.post('/LBJ1964', (req, res) => {res.status(200).send({value: req.body.value});LBJ1964=LBJ1964+req.body.value;if(LBJ1964< 0){LBJ1964= 0} writeFileSync('./Pages/LBJ1964.txt', (LBJ1964).toString() )})
app.post('/BG1964', (req, res) => {res.status(200).send({value: req.body.value});BG1964=BG1964+req.body.value;if(BG1964< 0){BG1964= 0} writeFileSync('./Pages/BG1964.txt', (BG1964).toString() )})
app.post('/RN1968', (req, res) => {res.status(200).send({value: req.body.value});RN1968=RN1968+req.body.value;if(RN1968< 0){RN1968= 0} writeFileSync('./Pages/RN1968.txt', (RN1968).toString() )})
app.post('/HH1968', (req, res) => {res.status(200).send({value: req.body.value});HH1968=HH1968+req.body.value;if(HH1968< 0){HH1968= 0} writeFileSync('./Pages/HH1968.txt', (HH1968).toString() )})
app.post('/GW1968', (req, res) => {res.status(200).send({value: req.body.value});GW1968=GW1968+req.body.value;if(GW1968< 0){GW1968= 0} writeFileSync('./Pages/GW1968.txt', (GW1968).toString() )})
app.post('/RN1972', (req, res) => {res.status(200).send({value: req.body.value});RN1972=RN1972+req.body.value;if(RN1972< 0){RN1972= 0} writeFileSync('./Pages/RN1972.txt', (RN1972).toString() )})
app.post('/GM1972', (req, res) => {res.status(200).send({value: req.body.value});GM1972=GM1972+req.body.value;if(GM1972< 0){GM1972= 0} writeFileSync('./Pages/GM1972.txt', (GM1972).toString() )})
app.post('/GF1976', (req, res) => {res.status(200).send({value: req.body.value});GF1976=GF1976+req.body.value;if(GF1976< 0){GF1976= 0} writeFileSync('./Pages/GF1976.txt', (GF1976).toString() )})
app.post('/JC1976', (req, res) => {res.status(200).send({value: req.body.value});JC1976=JC1976+req.body.value;if(JC1976< 0){JC1976= 0} writeFileSync('./Pages/JC1976.txt', (JC1976).toString() )})
app.post('/RR1980', (req, res) => {res.status(200).send({value: req.body.value});RR1980=RR1980+req.body.value;if(RR1980< 0){RR1980= 0} writeFileSync('./Pages/RR1980.txt', (RR1980).toString() )})
app.post('/JC1980', (req, res) => {res.status(200).send({value: req.body.value});JC1980=JC1980+req.body.value;if(JC1980< 0){JC1980= 0} writeFileSync('./Pages/JC1980.txt', (JC1980).toString() )})
app.post('/JA1980', (req, res) => {res.status(200).send({value: req.body.value});JA1980=JA1980+req.body.value;if(JA1980< 0){JA1980= 0} writeFileSync('./Pages/JA1980.txt', (JA1980).toString() )})
app.post('/WM1984', (req, res) => {res.status(200).send({value: req.body.value});WM1984=WM1984+req.body.value;if(WM1984< 0){WM1984= 0} writeFileSync('./Pages/WM1984.txt', (WM1984).toString() )})
app.post('/RR1984', (req, res) => {res.status(200).send({value: req.body.value});RR1984=RR1984+req.body.value;if(RR1984< 0){RR1984= 0} writeFileSync('./Pages/RR1984.txt', (RR1984).toString() )})
app.post('/MD1988', (req, res) => {res.status(200).send({value: req.body.value});MD1988=MD1988+req.body.value;if(MD1988< 0){MD1988= 0} writeFileSync('./Pages/MD1988.txt', (MD1988).toString() )})
app.post('/GB1988', (req, res) => {res.status(200).send({value: req.body.value});GB1988=GB1988+req.body.value;if(GB1988< 0){GB1988= 0} writeFileSync('./Pages/GB1988.txt', (GB1988).toString() )})
app.post('/BC1992', (req, res) => {res.status(200).send({value: req.body.value});BC1992=BC1992+req.body.value;if(BC1992< 0){BC1992= 0} writeFileSync('./Pages/BC1992.txt', (BC1992).toString() )})
app.post('/GB1992', (req, res) => {res.status(200).send({value: req.body.value});GB1992=GB1992+req.body.value;if(GB1992< 0){GB1992= 0} writeFileSync('./Pages/GB1992.txt', (GB1992).toString() )})
app.post('/RP1992', (req, res) => {res.status(200).send({value: req.body.value});RP1992=RP1992+req.body.value;if(RP1992< 0){RP1992= 0} writeFileSync('./Pages/RP1992.txt', (RP1992).toString() )})
app.post('/RP1996', (req, res) => {res.status(200).send({value: req.body.value});RP1996=RP1996+req.body.value;if(RP1996< 0){RP1996= 0} writeFileSync('./Pages/RP1996.txt', (RP1996).toString() )})
app.post('/BC1996', (req, res) => {res.status(200).send({value: req.body.value});BC1996=BC1996+req.body.value;if(BC1996< 0){BC1996= 0} writeFileSync('./Pages/BC1996.txt', (BC1996).toString() )})
app.post('/BD1996', (req, res) => {res.status(200).send({value: req.body.value});BD1996=BD1996+req.body.value;if(BD1996< 0){BD1996= 0} writeFileSync('./Pages/BD1996.txt', (BD1996).toString() )})
app.post('/GB2000', (req, res) => {res.status(200).send({value: req.body.value});GB2000=GB2000+req.body.value;if(GB2000< 0){GB2000= 0} writeFileSync('./Pages/GB2000.txt', (GB2000).toString() )})
app.post('/AG2000', (req, res) => {res.status(200).send({value: req.body.value});AG2000=AG2000+req.body.value;if(AG2000< 0){AG2000= 0} writeFileSync('./Pages/AG2000.txt', (AG2000).toString() )})
app.post('/RN2000', (req, res) => {res.status(200).send({value: req.body.value});RN2000=RN2000+req.body.value;if(RN2000< 0){RN2000= 0} writeFileSync('./Pages/RN2000.txt', (RN2000).toString() )})
app.post('/GB2004', (req, res) => {res.status(200).send({value: req.body.value});GB2004=GB2004+req.body.value;if(GB2004< 0){GB2004= 0} writeFileSync('./Pages/GB2004.txt', (GB2004).toString() )})
app.post('/JK2004', (req, res) => {res.status(200).send({value: req.body.value});JK2004=JK2004+req.body.value;if(JK2004< 0){JK2004= 0} writeFileSync('./Pages/JK2004.txt', (JK2004).toString() )})
app.post('/RN2004', (req, res) => {res.status(200).send({value: req.body.value});RN2004=RN2004+req.body.value;if(RN2004< 0){RN2004= 0} writeFileSync('./Pages/RN2004.txt', (RN2004).toString() )})
app.post('/BO2008', (req, res) => {res.status(200).send({value: req.body.value});BO2008=BO2008+req.body.value;if(BO2008< 0){BO2008= 0} writeFileSync('./Pages/BO2008.txt', (BO2008).toString() )})
app.post('/JM2008', (req, res) => {res.status(200).send({value: req.body.value});JM2008=JM2008+req.body.value;if(JM2008< 0){JM2008= 0} writeFileSync('./Pages/JM2008.txt', (JM2008).toString() )})
app.post('/BO2012', (req, res) => {res.status(200).send({value: req.body.value});BO2012=BO2012+req.body.value;if(BO2012< 0){BO2012= 0} writeFileSync('./Pages/BO2012.txt', (BO2012).toString() )})
app.post('/MR2012', (req, res) => {res.status(200).send({value: req.body.value});MR2012=MR2012+req.body.value;if(MR2012< 0){MR2012= 0} writeFileSync('./Pages/MR2012.txt', (MR2012).toString() )})
app.post('/DT2016', (req, res) => {res.status(200).send({value: req.body.value});DT2016=DT2016+req.body.value;if(DT2016< 0){DT2016= 0} writeFileSync('./Pages/DT2016.txt', (DT2016).toString() )})
app.post('/HC2016', (req, res) => {res.status(200).send({value: req.body.value});HC2016=HC2016+req.body.value;if(HC2016< 0){HC2016= 0} writeFileSync('./Pages/HC2016.txt', (HC2016).toString() )})
app.post('/GJ2016', (req, res) => {res.status(200).send({value: req.body.value});GJ2016=GJ2016+req.body.value;if(GJ2016< 0){GJ2016= 0} writeFileSync('./Pages/GJ2016.txt', (GJ2016).toString() )})
app.post('/JS2016', (req, res) => {res.status(200).send({value: req.body.value});JS2016=JS2016+req.body.value;if(JS2016< 0){JS2016= 0} writeFileSync('./Pages/JS2016.txt', (JS2016).toString() )})
app.post('/JB2020', (req, res) => {res.status(200).send({value: req.body.value});JB2020=JB2020+req.body.value;if(JB2020< 0){JB2020= 0} writeFileSync('./Pages/JB2020.txt', (JB2020).toString() )})
app.post('/DT2020', (req, res) => {res.status(200).send({value: req.body.value});DT2020=DT2020+req.body.value;if(DT2020< 0){DT2020= 0} writeFileSync('./Pages/DT2020.txt', (DT2020).toString() )})
app.post('/JJ2020', (req, res) => {res.status(200).send({value: req.body.value});JJ2020=JJ2020+req.body.value;if(JJ2020< 0){JJ2020= 0} writeFileSync('./Pages/JJ2020.txt', (JJ2020).toString() )})