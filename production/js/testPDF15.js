var fname = 'ทดสอบ'
var lname = 'ทดสอบทดสอบ'
var day = '29'
var mou = 'กุมภาพันธ์'
var year = '2563'
var old = '25'
var name = 'นาย มานี  มานะ'
var pid = '1-1111-11111-11-1'
var dob = '12 มกราคม 2536'
var t1 = 'ไทย'
var t2 = 'พุทธ'
var start = '29 มกราคม 2559'
var end = '29 มกราคม 2567'
var address = '6/79 ต.ไร่ขิง อ.สามพราน จ.นครปฐม 73210'
var provence = 'กรุงเทพมหานคร'
var hno = '100'
$(document).ready(function() {
  $('.buttonFinish btn btn-default').remove()
})

function getdata() {
  console.log('hey')
  $('#pid').val(pid)
  $('#fullname').val(name)
  $('#dob').val(dob)
  $('#old').val(old)
  $('#t1').val(t2)
  $('#t2').val(t1)
  $('#start').val(start)
  $('#end').val(end)
  $('#address').val(address)
}
function generatePdf() {
  // console.log(tableContent);
  pdfMake.fonts = {
    Roboto: {
      normal: 'THSarabun.ttf',
      bold: 'THSarabun.ttf',
      italics: 'THSarabun.ttf',
      bolditalics: 'THSarabun.ttf',
    },
  }
  var docDefinition = {
    // pageOrientation: 'landscape',
    pageSize: 'A4',
    pageMargins: [50, 10, 10, 10],
    content: [
      // { // }, //     return {text:"แผ่นที่ "+cPage.toString() + '/' + pC, alignment:"center",margin:[0,20,0,0]}; //     pC = pageCount; //     cPage = currentPage; // footer: function(currentPage, pageCount) {
      //     margin: [ 10,0, 0, 0 ],
      //     columns: [
      //         {
      //             text: "ธงชาติ"

      //         }
      //     ]
      // },
      { text: 'พรรค....', style: 'header' },
      { text: 'ใบสมัครสมาชิก', alignment: 'center', style: 'header2' },
      {
        text: 'กรุณากรอกข้อมูลด้วยความชัดเจน',
        alignment: 'center',
        style: 'header2',
      },
      {
        margin: [20, 0, 0, 0],
        text: 'ประวัติส่วนตัว',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'ชื่อ-สกุล :  ' +
          name +
          '             ' +
          'บัตรประจำตัวประชาชนเลขที่ : ' +
          pid,
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'วันเดือนปีเกิด : ' +
          dob +
          '             ' +
          'อายุ : ' +
          old +
          'ปี' +
          '             ' +
          'สัญชาติ : ' +
          t1 +
          '             ' +
          'ศาสนา : ' +
          t2,
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'ที่อยู่ : ' +
          address +
          '             ' +
          'วันออกบัตร : ' +
          start +
          '    ' +
          ' วันหมดอายุ : ' +
          end +
          '    ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        margin: [20, 0, 0, 0],
        text: 'ที่อยู่ที่สามารถติดต่อได้',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'บ้านเลขที่' +
          '       ' +
          hno +
          '     ' +
          'หมู่ที่' +
          '     ' +
          '       ' +
          '     ' +
          'ซอย' +
          '                         ' +
          '       ' +
          'ถนน' +
          '     ' +
          '       ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'แขวง/ตำบล' +
          '                    ' +
          '       ' +
          'เขต/อำเภอ' +
          '     ' +
          '       ' +
          'จังหวัด' +
          '     ' +
          provence +
          '     ' +
          'รหัสไปรษณีย์ ' +
          '     ' +
          '[ ][ ][ ][ ]',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'โทรศัพท์บ้าน' +
          '                                  ' +
          'โทรศัพท์มือถือ' +
          '                                  ' +
          'โทรสาร' +
          '                                  ' +
          'E-Mail' +
          '                                      ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        margin: [20, 0, 0, 0],
        text: 'ประวัติการศึกษา',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'การศึกษาสูงสุด' +
          '                                         ' +
          'คณะ/สาขา' +
          '                                         ' +
          'ชื่อสถาบัน' +
          '                                         ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        margin: [20, 0, 0, 0],
        text: 'ประวัติการทำงาน',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'อาชีพปัจจุบัน' +
          '                                                                  ' +
          'ตำแหน่ง' +
          '                                                                                     ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        margin: [0, 0, 0, 0],
        text:
          'ลงชื่อ' +
          '...............................................................................ผู้สมัคร',
        alignment: 'center',
        fontSize: 14,
      },
      { text: name, alignment: 'center', fontSize: 14 },
      {
        text: 'ให้ไว้ ณ วันที่           เดือน                  พ.ศ.      ',
        alignment: 'center',
        fontSize: 14,
      },
      {
        text:
          '............................................................................................................................................................................................................................................................................................................................',
        alignment: 'center',
        fontSize: 14,
      },
      {
        text:
          '(เฉพาะเจ้าหน้าที่) รับเข้าเป็นสมาชิก เมื่อวันที่ .............../.............../...............เลขที่สมาชิกพรรค...............................................................................................',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'ข้าพเจ้าได้ตรวจสอบคุณสมบัติของผู้สมัครสมาชิกพรรคแล้ว เห็นว่ามีคุณสมบัติและไม่มีลักษณะต้องห้ามมิให้ใช้สิทธิเลือกตั้งตามรัฐธรรมนูญ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        margin: [0, 20, 0, 0],
        text:
          'ลงชื่อ' +
          '...............................................................................นายทะเบียนพรรค' +
          '                            ' +
          'ลงชื่อ' +
          '.....................................................ผู้อนุมัติ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          '(.........................................................................................)' +
          '                                        ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'ให้ไว้ ณ วันที่           เดือน                  พ.ศ.      ' +
          '                                              ',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          '............................................................................................................................................................................................................................................................................................................................',
        alignment: 'center',
        fontSize: 14,
      },
      {
        text: 'ใบเสร็จการชำระค่าสมาชิก' + '     พรรค.....',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'วันที่ :  ' +
          '                                                                                                     ' +
          'Ref1 :  ',
        alignment: 'left',
        fontSize: 14,
      },
      { text: name, alignment: 'center', fontSize: 14 },
      {
        text:
          'จำนวนเงิน' +
          '                                                                        ' +
          '3650',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          'จำนวนเงิน(ตัวอักษร)' +
          '                                                    ' +
          'สามพันหกร้อยห้าสิบบาทถ้วน',
        alignment: '',
        fontSize: 14,
      },
      {
        text:
          'ลงชื่อ' +
          '...............................................................................ผู้รับเงิน',
        alignment: 'left',
        fontSize: 14,
      },
      {
        text:
          '(.........................................................................................)',
        alignment: 'left',
        fontSize: 14,
      },
    ],
    styles: {
      header: { bold: true, alignment: 'center', fontSize: 20 },
      leads: { leadingIndent: 40 },
      endHeader: { margin: [0, 0, 0, 15] },
      footer: { alignment: 'center' },
      header2: { fontSize: 14 },
    },
    defaultStyle: {
      // font: 'Book_R-luX[2006]', // {text:"รูปบัตร....",alignment: 'right',}, // {text:"ระดับ "+(options.cc==="10"?options.aa_desc:"อำเภอ "+options.aa_desc)+ (optioหns.cc==="10"?' '+options.cc_desc :' จังหวัด'+options.cc_desc),style:'header'},
      // font: 'Roboto'
      // font: 'Roboto'
      lineHeight: 1.5,
      fontSize: 18,
      font: 'Roboto',
    },
  }
  pdfMake.createPdf(docDefinition).print()
}
