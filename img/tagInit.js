function verifyTag(tagId) {
    var $spanVerifyState = $('#spanVerifyState');
    var $divVerifyRegion = $('#divVerifyRegion');
    var password = $('#txtTagPassword').val().trim();

    if (!password) {
        return alert('请输入密码');
    }

    $.ajax({
        url: '/tag/action/verification/' + tagId,
        type: 'POST',
        data: {
            password: password
        },
        success: function (json) {
            $spanVerifyState.html('已刮开');
            $divVerifyRegion.hide();
        },
        error: function (json) {
            try {
                json = JSON.parse(json.responseText);
            } catch (e) {
                json = null;
            }

            if (json) {
                alert(json.reason);
            } else {
                alert('系统繁忙，请重试');
            }
        }
    });
}