import data from './test.json'
const fs = require('fs');
import path from 'path'


const proviceMap = {
    '北京': '北京',
    '天津': '天津',
    '河北': '河北省',
    '山西': '山西省',
    '内蒙': '内蒙古自治区',
    '辽宁': '辽宁省',
    '吉林': '吉林省',
    '黑龙': '黑龙江省',
    '上海': '上海',
    '江苏': '江苏省',
    '浙江': '浙江省',
    '安徽': '安徽省',
    '福建': '福建省',
    '江西': '江西省',
    '山东': '山东省',
    '河南': '河南省',
    '湖北': '湖北省',
    '湖南': '湖南省',
    '广东': '广东省',
    '广西': '广西壮族自治区',
    '海南': '海南省',
    '重庆': '重庆',
    '四川': '四川省',
    '贵州': '贵州省',
    '云南': '云南省',
    '西藏': '西藏自治区',
    '陕西': '陕西省',
    '甘肃': '甘肃省',
    '青海': '青海省',
    '宁夏': '宁夏回族自治区',
    '新疆': '新疆维吾尔自治区',
    '台湾': '台湾',
    '香港': '香港特别行政区',
    '澳门': '澳门特别行政区',
    '海外': '海外'
  }

export const parseData = (data) => {

    const proviceList = []
    for(let province in data) {


        const cityList = []
        for(let city in data[province]) {


              const areaList = []
                for(let area of data[province][city]) {
                    areaList.push({ code: area, name: area })
                }

                cityList.push({ code: city, name: city, children: areaList })
        }

        proviceList.push({
            code: proviceMap[province],
            name: proviceMap[province],
            children: cityList
        })
    }

    fs.writeFile(path.join(__dirname, 'test-result.json'), JSON.stringify(proviceList), function(err) {
        if (err)
            return;
        console.log('导出成功')
    });
}

parseData(data)
