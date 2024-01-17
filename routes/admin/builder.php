<?php

use Illuminate\Support\Facades\Route;
use Sokeio\Builder\Livewire\BuilderPlugin\BuilderPluginForm;
use Sokeio\Builder\Livewire\BuilderPlugin\BuilderPluginTable;
use Sokeio\Builder\Livewire\PageBuilder;
use Sokeio\Builder\Livewire\PostBuilder;
use Sokeio\Builder\Livewire\TemplateManager;

Route::group([
    'as' => 'admin.',
], function () {
    Route::get('builder/new-page', PageBuilder::class)->name('builder.page.new');
    Route::get('builder/edit-page/{dataId}', PageBuilder::class)->name('builder.page.edit');
    Route::get('builder/new-post', PostBuilder::class)->name('builder.post.new');
    Route::get('builder/edit-post/{dataId}', PostBuilder::class)->name('builder.post.edit');
    Route::post('template-manager', TemplateManager::class)->name('builder.template-manager');
    route_crud('builder-plugin', BuilderPluginTable::class, BuilderPluginForm::class);
});
