const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// const filePath = path.join(process.env.STORY_DIR, "story", "text.txt"); //__dirname

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send(`
  <div style="max-width: fit-content;
  margin-left: auto;
  margin-right: auto;">
    <h2 style="text-align: center;">Anima Praisin</h2>
    <h3 style="text-align: center;">ID: 65130852</h3>
    <img src="https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/298543886_10158559593701568_7550403860973651931_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UBq3w3rz2SUQ7kNvgHdABvG&_nc_ht=scontent.fbkk15-1.fna&oh=00_AYAJ6r9O64CtMniTqIde3w9MXeEPtJiirh7QArGxW13Z6Q&oe=664F7867" style="width:300px;height:300px;" > <br/>
    <a href="/myresearch" style="text-align: center;">My Research</a> 
    <a href="/researchplan" style="text-align: center;">My Research Plan</a> 
   </div>  
    `);
});

app.get("/myresearch", (req, res) => {
  return res.send(`
  <p>การฝึกอบรมมีบทบาทสำคัญในการพัฒนาทรัพยากรบุคคลและทักษะที่เหมาะสมสำหรับตลาดแรงงานปัจจุบัน อย่างไรก็ตาม สภาพการณ์ปัจจุบันแสดงให้เห็นว่าหลักสูตรการฝึกอบรมบางประการอาจจะไม่ได้รับการปรับปรุงตามความเปลี่ยนแปลงในตลาดแรงงานและเทคโนโลยีที่เร็วขึ้น
  การวิจัยนี้มีวัตถุประสงค์เพื่อทำให้การฝึกอบรมเป็นไปตามความต้องการของตลาดแรงงานและเทคโนโลยีปัจจุบัน โดยการใช้เทคโนโลยี Machine Learning เพื่อวิเคราะห์และเลือกหลักสูตรที่มีประสิทธิภาพและเหมาะสมสำหรับผู้เรียนในสังคมปัจจุบัน    
  <br />
  วัตถุประสงค์ของการวิจัย
	1.  เพื่อพัฒนาอัลกอริทึม Machine Learning ที่สามารถวิเคราะห์ข้อมูลปัจจัยต่างๆ เพื่อเลือกหลักสูตรฝึกอบรมที่เหมาะสม
	2. เพื่อนำแบบจำลอง Machine Learning ไปประยุกต์ใช้เพื่อเพิ่มประสิทธิภาพในการเลือกหลักสูตรฝึกอบรม
             
ขอบเขตของการวิจัย
	1. ข้อมูลที่ใช้ในการพัฒนาแบบจำลอง Machine Learning ประกอบด้วยข้อมูลหลักสูตร ข้อมูลตำแหน่งงานที่มีการค้นหาในเว็บสมัครงาน คุณสมบัติหรือความรู้ความสามารถที่ต้องการของตำแหน่งงาน เทียบกับสมรรถนะที่กำหนดในหลักสูตรจากเว็บไซต์สมัครงานต่างๆ เช่น JobBKK, Indeed, WorkVenture เป็นต้น คุณสมบัติหรือความรู้ความสามารถที่ต้องการของตำแหน่งงาน สามารถรวบรวมได้จากข้อมูลประกาศรับสมัครงาน
	2. ความต้องการในการเรียนรู้ เป็นความต้องการที่บุคคลหรือกลุ่มบุคคลมีต่อการเรียนรู้ ซึ่งอาจเกิดจากปัจจัยต่างๆ เช่น ความต้องการพัฒนาทักษะเพื่อการทำงาน ความต้องการพัฒนาทักษะเพื่อการศึกษาต่อ ความต้องการพัฒนาทักษะเพื่อการดำเนินชีวิต เป็นต้น เป้าหมายในการเรียนรู้ เป็นเป้าหมายที่บุคคลหรือกลุ่มบุคคลต้องการบรรลุจากการเรียนรู้ ซึ่งอาจรวมถึงเป้าหมายเชิงความรู้ เป้าหมายเชิงทักษะ และเป้าหมายเชิงทัศนคติ
	3. ทักษะที่มีอยู่ เป็นทักษะที่บุคคลหรือกลุ่มบุคคลมีอยู่แล้ว ซึ่งอาจเป็นประโยชน์ต่อการเลือกหลักสูตรฝึกอบรมที่เหมาะสม ความสนใจ เป็นความสนใจของบุคคลหรือกลุ่มบุคคล ซึ่งอาจเป็นประโยชน์ต่อการเลือกหลักสูตรฝึกอบรมที่สอดคล้องกับความสนใจ
	4. ข้อมูลส่วนบุคคลอื่นๆ อาจเป็นข้อมูลอื่นๆ ที่อาจเป็นประโยชน์ต่อการเลือกหลักสูตรฝึกอบรม เช่น เพศ อายุ การศึกษา ประสบการณ์การทำงาน เป็นต้น


  </p>
  <a href="/">MyHome</a>
    `);
});

app.get("/researchplan", (req, res) => {
  return res.send(`
    <table border="1"style="border-collapse: collapse;">
    <tr>
      <th>Work</th>
      <th>October</th>
      <th>November</th>
      <th>December</th>
      <th>January</th>
      <th>February</th>
      <th>March</th>
      <th>April</th>
      <th>May</th>
      <th>June</th>
      <th>July</th>
      <th>August</th>

    </tr>
    <tr>
      <td>ศึกษาปัญหา</td>
      <td>start</td>
      <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>literature review</td>  
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ออกแบบโครงสร้างการทดลอง</td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ลงมือ coding </td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>
      <tr>
        <td>ทดสอบ</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ทดสอบการทำงานจริงและบันทึกผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>ประเมินผล</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
        <td></td>
    </tr>
    <tr>
        <td>สรุป</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>start</td>
    </tr>
</tr>
  </table>
  <a href="/">Home</a>
`);
});

app.get("/rest/researchplan", (req, res) => {
  res.status(200).json({
    research: {
      work: {
        problem: "october",
        literature: "november",
        design: "december",
        codingmvc: "january, february",
        codingfrontendbackend: "march, april, may",
        unittest: "june",
        test: "july",
        result: "august",
        conclusion: "august",
      },
    },
  });
});

app.listen(3000);
