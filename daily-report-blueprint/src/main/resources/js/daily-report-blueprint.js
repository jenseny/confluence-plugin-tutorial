Confluence.Blueprint.setWizard('com.jenseny.confluence.tutorial.daily-report-blueprint:create-by-daily-report-template', function(wizard) {
    wizard.on('submit.page1Id', function(e, state) {
        var vName = state.pageData.vName;
        if (!vName){
            alert('请您填写姓名。');
            return false;
        }
        var vDate = state.pageData.vDate;
        if (!vDate){
            alert('请您选择日期。');
            return false;
        }
        state.pageData.ContentPageTitle = vName + vDate.replace(/-/g,'');
    });
    wizard.on("post-render.page1Id", function(e, state) {
        state.$container.find('#vName').val(AJS.Meta.get('current-user-fullname'));
        var dateTmp = new Date();
        var mouth = dateTmp.getMonth() + 1;
        if (mouth < 10) {
            mouth = '0' + mouth;
        }
        var day = dateTmp.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        const date = dateTmp.getFullYear() + '-' + mouth + '-' + day;
        state.$container.find('#vDate').val(date);
    });

});