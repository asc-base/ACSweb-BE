const GenerateForgotPasswordMail = (link: string): string => {
    return `
    <div
    style="
      width: 100dvw;
      height: 100dvh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    "
  >
    <div>
      <img src="" alt="" />
    </div>
    <div style="text-align: center">
      <p style="line-height: 1.5rem">
        หากคุณต้องการเปลี่ยนรหัสผ่าน<br />สามารถคลิกปุ่มด้านล่างเพื่อเริ่มต้น
      </p>
    </div>
    <div>
      <button
        style="
          width: 15rem;
          height: 3rem;
          border-radius: 0.5rem;
          background-color: #120554;
          color: white;
          font-weight: bold;
          padding: 0;
          border: none;
        "
        onclick="location.href='${link}'"
      >
        เปลี่ยนรหัสผ่าน
      </button>
    </div>
    <div style="text-align: center">
      <p style="line-height: 1.5rem; color: #999999">
        หากคุณไม่ได้ขอเปลี่ยนรหัสผ่าน&nbsp;คุณสามารถเพิกเฉยได้อย่างปลอดภัย<br />มีเพียงบุคคลที่เข้าถึงอีเมลของคุณเท่านั้นที่สามารถเปลี่ยนรหัสผ่านได้
      </p>
    </div>
  </div>
  
    `
}

export default GenerateForgotPasswordMail