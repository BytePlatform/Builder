<div class="sokeio-builder-control__content--item">
    <h3> Page Setting</h3>
    <div class="manager-body page-manager">
        {!! form_render($itemManager, $form, $dataId) !!}
        <div class="mt-2 float-end">
            <button class="btn btn-primary" wire:click='doSaveBuilder()'>
                <span title="Publish" class=" fa fa-save"></span>
                <span style="margin-left: 5px;">Publish</span>
            </button>
        </div>
    </div>
</div>