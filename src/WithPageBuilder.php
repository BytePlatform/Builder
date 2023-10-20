<?php

namespace BytePlatform\Builder;

use BytePlatform\Facades\Theme;
use BytePlatform\Concerns\WithFormData;

trait WithPageBuilder
{
    use WithFormData;
    public $tabIndex = 0;
    public $builder_version = 'v1.0.2';
    protected $queryString = [
        'tabIndex' => ['except' => 0],
    ];
    protected function getPageTitle()
    {
        return 'Page Builder';
    }
    protected function getLinkPageList()
    {
        return '';
    }
    protected function getOptions()
    {
        return BuilderManager::New()->getOptions();
    }

    public function ConvertShortcodeToHtml($content)
    {
        $this->skipRender();
        return shortcode_render($content);
    }
    public function doSaveBuilder()
    {
        $this->skipRender();
    }
    public function getTemplates()
    {
        $this->skipRender();
        return TemplateBuilder::getTemplates();
    }
    public function render()
    {
        Theme::setLayout('none');
        Theme::setTitle($this->getPageTitle(), true);
        return view('builder::page', [
            'options' => $this->getOptions(),
            'itemManager' => $this->getItemManager(),
            'templates' => [],
            'linkPageList' => $this->getLinkPageList(),
        ]);
    }
}
