<?php

namespace Sokeio\Builder\Livewire\Plugin;

use Sokeio\Builder\Models\BuilderPlugin;
use Sokeio\Components\Form;
use Sokeio\Components\UI;

class PluginForm extends Form
{
    protected function  getModel()
    {
        return BuilderPlugin::class;
    }
    protected function getTitle()
    {
        return __('Builder Plugin');
    }
    protected function FormUI()
    {
        return UI::Prex('data', [
            UI::Text('name')->Label(__('Name'))->required(),
            UI::Textarea('js')->Label(__('JS'))->ValueDefault('[]')->required()->regex('/^\[\]$/'),
            UI::Textarea('css')->Label(__('CSS'))->ValueDefault('[]')->required()->regex('/^\[\]$/'),
            UI::Textarea('options')->Label(__('Options'))->ValueDefault('[]')->required()->regex('/^\[\]$/'),
            UI::Checkbox('is_active')->Label(__('Active'))->Title(__('Active'))->ValueDefault(1)->required()->regex('/^\[\]$/')
        ])->ClassName('p-2');
    }
}
