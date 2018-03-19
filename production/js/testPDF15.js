var fname = "ทดสอบ"
var lname = "ทดสอบทดสอบ"
var day = "29"
var mou = "กุมภาพันธ์"
var year = "2563"
var old = "30"
$( document ).ready(function() {
    $(".buttonFinish btn btn-default").remove();
});
function generatePdf() {
    // console.log(tableContent);
    pdfMake.fonts= {
        Roboto: {
            normal: "THSarabun.ttf", bold: "THSarabun.ttf", italics: "THSarabun.ttf", bolditalics: "THSarabun.ttf"
        }
    };
    var docDefinition={
        // pageOrientation: 'landscape',
        pageSize:'A4',
        pageMargins: [50,10,10,10],
        // footer: function(currentPage, pageCount) {
        //     cPage = currentPage;
        //     pC = pageCount;
        //     return {text:"แผ่นที่ "+cPage.toString() + '/' + pC,alignment:"center",margin:[0,20,0,0]};
        // },


        content:[
            // {
            //     margin: [ 10,0, 0, 0 ],
            //     columns: [
            //         {
            //             text: "ธงชาติ"
                        
            //         }
            //     ]
            // },
            {text:"พรรค....",style:'header'},
            // {text:"ระดับ "+(options.cc==="10"?options.aa_desc:"อำเภอ "+options.aa_desc)+ (optioหns.cc==="10"?' '+options.cc_desc :' จังหวัด'+options.cc_desc),style:'header'},
            // {text:"รูปบัตร....",alignment: 'right',},
            {text:"ใบสมัคสมาชิก",alignment: 'center',style:'header2'},
            {text:"กรุณากรอกข้อมูลด้วยความชัดเจน",alignment: 'center',style:'header2'},
            {margin: [20,0,0,0],text:"ประวัติส่วนตัว",alignment: 'left',fontSize:14},
            {text:"ชื่อ "+"[ "+" ]"+"  นาย"+"[ "+" ]"+"  นาง"+"[ "+" ]"+"  นางสาว "+"            "+fname+"           "+"นามสกุล"+"           "+lname+"     ",alignment: 'left',fontSize:14},
            {text:"เกิดวันที่     "+day+"   เดือน     "+mou+"    ปี     "+year+"      อายุ  "+old+"   ปี    "+"   จังหวัดที่เกิด    "+"  "+"           "+"ศาสนา"+"    "+"   ",alignment: 'left',fontSize:14},
            {text:"สัญชาติ        "+"ไทย"+"    "+" บัตรประจำตัวประชาชนเลขที่  ",alignment: 'left',fontSize:14},
            {text:"วันออกบัตร             "+" "+"    "+" วันหมดอายุ             "+"    "+"ออกให้ที่ (เขต/อำเภอ)             "+"        "+"จังหวัด "+"  ",alignment: 'left',fontSize:14},
            
            {margin: [20,0,0,0],text:"ที่อยู่ที่สามารถติดต่อได้",alignment: 'left',fontSize:14},
            {text:"บ้านเลขที่"+"....................................."+"หมู่ที่"+".............."+"ซอย"+"........................................"+"ถนน"+"...................................................................................................................",alignment: 'left',fontSize:14},
            {text:"แขวง/ตำบล"+".................................."+"เขต/อำเภอ"+"...................................................."+"จังหวัด"+"................................................"+"รหัสไปรษณีย์ "+"[ ][ ][ ][ ]",alignment: 'left',fontSize:14},
            {text:"โทรศัพท์บ้าน"+"..........................................."+"โทรศัพท์มือถือ"+"................................."+"โทรสาร"+"..............................."+"E-Mail"+".................................................",alignment: 'left',fontSize:14},
            {margin: [20,0,0,0],text:"ประวัติการศึกษา",alignment: 'left',fontSize:14},
            {text:"การศึกษาสูงสุด"+"............................................"+"คณะ/สาขา"+"..............................................................."+"ชื่อสถาบัน"+"..............................................................................",alignment: 'left',fontSize:14},
            {margin: [20,0,0,0],text:"ประวัติการทำงาน",alignment: 'left',fontSize:14},
            {text:"อาชีพปัจจุบัน"+"........................................................................................."+"ตำแหน่ง"+"....................................................................................................................",alignment: 'left',fontSize:14},
            {margin: [0,20,0,0],text:"ลงชื่อ"+"...............................................................................ผู้สมัคร",alignment: 'center',fontSize:14},
            {text:"(...............................................................................)",alignment: 'center',fontSize:14},
            {text:"ให้ไว้ ณ วันที่           เดือน                  พ.ศ.      ",alignment: 'center',fontSize:14},
            {text:"............................................................................................................................................................................................................................................................................................................................",alignment: 'center',fontSize:14},
        
            {text:"(เฉพาะเจ้าหน้าที่) รับเข้าเป็นสมาชิก เมื่อวันที่ .............../.............../...............เลขที่สมาชิกพรรค...............................................................................................",alignment: 'left',fontSize:14},
            {text:"ข้าพเจ้าได้ตรวจสอบคุณสมบัติของผู้สมัครสมาชิกพรรคแล้ว เห็นว่ามีคุณสมบัติและไม่มีลักษณะต้องห้ามมิให้ใช้สิทธิเลือกตั้งตามรัฐธรรมนูญ",alignment: 'left',fontSize:14},
            {margin: [0,20,0,0],text:"ลงชื่อ"+"...............................................................................ผู้สมัคร"+"                            "+"ลงชื่อ"+"...............................................................................ผู้อนุมัติ",alignment: 'left',fontSize:14},
            {text:"(.........................................................................................)"+"                                        ",alignment: 'left',fontSize:14},
            {text:"ให้ไว้ ณ วันที่           เดือน                  พ.ศ.      "+"                                              ",alignment: 'left',fontSize:14},
            {text:"............................................................................................................................................................................................................................................................................................................................",alignment: 'center',fontSize:14},
          
            {text:"ใบเสร็จการชำระค่าสมาชิก"+"     พรรค.....",alignment: 'left',fontSize:14},
            {text:"วันที่ :  "+"                                                                                                     "+"Ref1 :  ",alignment: 'left',fontSize:14},
            {text:"ชื่อ  "+fname+"     "+"นามสกุล   "+lname+"     "+"ประเภทสมาชิก  "+"  ",alignment: 'center',fontSize:14},
            {text:"จำนวนเงิน"+"                                                                        "+"เงิน",alignment: 'left',fontSize:14},
            {text:"จำนวนเงิน(ตัวอักษร)"+"                                                                "+"เงิน",alignment: 'left',fontSize:14},
            {text:"ลงชื่อ"+"...............................................................................ผู้รับเงิน",alignment: 'center',fontSize:14},
            {text:"(.........................................................................................)",alignment: 'center',fontSize:14},
            
        ],
        styles:{
            header:{
                bold: true,
                alignment:'center',
                fontSize:20,
                // font: 'Roboto'
            },
            leads: {
                leadingIndent: 40
            },
            endHeader:{
                margin: [0, 0, 0, 15]
            },
            footer:{
                alignment:'center'
            },
            header2:{
                fontSize:14,
                // font: 'Roboto'
            },
        },
        defaultStyle: {
            // font: 'Book_R-luX[2006]',
            lineHeight:1.5,
            fontSize:18,
            font: 'Roboto'
        }
    }
    pdfMake.createPdf(docDefinition).print();
}