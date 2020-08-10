AJS.bind("blueprint.wizard-register.ready", function () {
    function submitJensenySpace(e, state) {
        state.pageData.ContentPageTitle = state.pageData.name + " " + AJS.I18n.getText("confluence.blueprints.space.jenseny.home.title.suffix");
        return Confluence.SpaceBlueprint.CommonWizardBindings.submit(e, state);
    }
    function preRenderJensenySpace(e, state) {
        state.soyRenderContext['atlToken'] = AJS.Meta.get('atl-token');
        state.soyRenderContext['showSpacePermission'] = false;
    }
    Confluence.Blueprint.setWizard('com.jenseny.confluence.tutorial.space-blueprint:jenseny-space-blueprint-item', function(wizard) {
        wizard.on("submit.jensenySpaceId", submitJensenySpace);
        wizard.on("pre-render.jensenySpaceId", preRenderJensenySpace);
        wizard.on("post-render.jensenySpaceId", Confluence.SpaceBlueprint.CommonWizardBindings.postRender);
    });
});