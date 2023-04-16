function Home() {
    var Validate = document.getElementById("Validate1").value
    var ValidatePass = String(document.getElementById("Validate2").value)
    if (Validate == "") {
        window.alert("رمز عبور یا نام کاربری نمیتواند خالی باشد")
    }
    else if (ValidatePass.length < 6) {
        window.alert("رمز عبور نمیتواند کمتر از 6 حرف باشد")
    }
    else {
        window.location.href = "../Home.html"
        window.alert("ورود با موفقیت انجام شد")
    }
}
function Send() {
    document.getElementById("recipient-name").innerText = ""
    document.getElementById("message-text").innerText = ""
    window.alert("پیام شما به پشتیبان ارسال شد")
}