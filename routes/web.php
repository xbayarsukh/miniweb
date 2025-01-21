<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\PortfolioController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\LabelController;
use App\Http\Controllers\SuperAdmin\BillingController;
use App\Http\Controllers\SuperAdmin\PackageController;
use App\Http\Controllers\SuperAdmin\TemplateController;
use App\Http\Controllers\SuperAdmin\SystemSettingController;
use App\Http\Controllers\SuperAdmin\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\RoleMiddleware;

Route::domain('{subdomain}.'.env('APP_URL'))->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::group(['prefix'=>'admin'],function () {
        Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
        
        Route::group(['prefix'=>'about'],function () {
            Route::get('/', [AboutController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.about');
            Route::post('/', [AboutController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.about.update');
        });
    
        Route::group(['prefix'=>'posts'],function () {
            Route::get('/', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.posts');
            Route::get('/create', [PostController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.posts.create');
            Route::post('/create', [PostController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.posts.store');
            Route::get('/edit/{id}', [PostController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.posts.edit');
            Route::post('/edit/{id}', [PostController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.posts.update');
            Route::post('/destroy/{id}', [PostController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.posts.destroy');
        });
    
        Route::group(['prefix'=>'services'],function () {
            Route::get('/', [ServiceController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.services');
            Route::get('/create', [ServiceController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.services.create');
            Route::post('/create', [ServiceController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.services.store');
            Route::get('/edit/{id}', [ServiceController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.services.edit');
            Route::post('/edit/{id}', [ServiceController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.services.update');
            Route::post('/destroy/{id}', [ServiceController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.services.destroy');
        });
    
        Route::group(['prefix'=>'portfolios'],function () {
            Route::get('/', [PortfolioController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.portfolios');
            Route::get('/create', [PortfolioController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.portfolios.create');
            Route::post('/create', [PortfolioController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.portfolios.store');
            Route::get('/edit/{id}', [PortfolioController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.portfolios.edit');
            Route::post('/edit/{id}', [PortfolioController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.portfolios.update');
            Route::post('/destroy/{id}', [PortfolioController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.portfolios.destroy');
        });
    
        Route::group(['prefix'=>'partners'],function () {
            Route::get('/', [PartnerController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.partners');
            Route::get('/create', [PartnerController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.partners.create');
            Route::post('/create', [PartnerController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.partners.store');
            Route::get('/edit/{id}', [PartnerController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.partners.edit');
            Route::post('/edit/{id}', [PartnerController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.partners.update');
            Route::post('/destroy/{id}', [PartnerController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.partners.destroy');
        });
    
        Route::group(['prefix'=>'faqs'],function () {
            Route::get('/', [FaqController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.faqs');
            Route::get('/create', [FaqController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.faqs.create');
            Route::post('/create', [FaqController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.faqs.store');
            Route::get('/edit/{id}', [FaqController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.faqs.edit');
            Route::post('/edit/{id}', [FaqController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.faqs.update');
            Route::post('/destroy/{id}', [FaqController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.faqs.destroy');
        });
    
        Route::group(['prefix'=>'labels'],function () {
            Route::get('/', [LabelController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.labels');
            Route::post('/', [LabelController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.labels.update');
        });

        Route::group(['prefix'=>'orders'],function () {
            Route::get('/', [OrderController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.orders');
            Route::get('/show/{id}', [OrderController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.orders.edit');
            Route::patch('/', [OrderController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.orders.update');
        });
        
        Route::group(['prefix'=>'profile'],function () {
            Route::get('/', [ProfileController::class, 'edit'])->middleware(['auth', 'verified'])->name('profile.edit');
            Route::patch('/', [ProfileController::class, 'update'])->middleware(['auth', 'verified'])->name('profile.update');
            Route::delete('/', [ProfileController::class, 'destroy'])->middleware(['auth', 'verified'])->name('profile.destroy');
        });
    
    });
});

Route::get('/', [HomeController::class, 'home']);

Route::group(['prefix'=>'admin'],function () {
    Route::get('/', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
    
    Route::middleware([RoleMiddleware::class])->group(function () {
        Route::group(['prefix'=>'users'],function () {
            Route::get('/', [UsersController::class, 'index'])->name('admin.users');
            // Route::get('/create', [UsersController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.users.create');
            // Route::post('/create', [UsersController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.users.store');
            Route::get('/edit/{id}', [UsersController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.users.edit');
            Route::post('/edit/{id}', [UsersController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.users.update');
        });
       
        Route::group(['prefix'=>'billing'],function () {
            Route::get('/', [BillingController::class, 'index'])->name('admin.billing');
        });
    
        Route::group(['prefix'=>'package'],function () {
            Route::get('/', [PackageController::class, 'index'])->name('admin.package');
            Route::get('/create', [PackageController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.package.create');
            Route::post('/create', [PackageController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.package.store');
            Route::get('/edit/{id}', [PackageController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.package.edit');
            Route::post('/edit/{id}', [PackageController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.package.update');
        });

        Route::group(['prefix'=>'template'],function () {
            Route::get('/', [TemplateController::class, 'index'])->name('admin.template');
            Route::get('/create', [TemplateController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.template.create');
            Route::post('/create', [TemplateController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.template.store');
            Route::get('/edit/{id}', [TemplateController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.template.edit');
            Route::post('/edit/{id}', [TemplateController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.template.update');
        });
        
        Route::group(['prefix'=>'setting'],function () {
            Route::get('/', [SystemSettingController::class, 'index'])->name('admin.setting');
        });
    });
    
    Route::group(['prefix'=>'about'],function () {
        Route::get('/', [AboutController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.about');
        Route::post('/', [AboutController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.about.update');
    });

    Route::group(['prefix'=>'posts'],function () {
        Route::get('/', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.posts');
        Route::get('/create', [PostController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.posts.create');
        Route::post('/create', [PostController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.posts.store');
        Route::get('/edit/{id}', [PostController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.posts.edit');
        Route::post('/edit/{id}', [PostController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.posts.update');
        Route::post('/destroy/{id}', [PostController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.posts.destroy');
    });

    Route::group(['prefix'=>'services'],function () {
        Route::get('/', [ServiceController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.services');
        Route::get('/create', [ServiceController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.services.create');
        Route::post('/create', [ServiceController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.services.store');
        Route::get('/edit/{id}', [ServiceController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.services.edit');
        Route::post('/edit/{id}', [ServiceController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.services.update');
        Route::post('/destroy/{id}', [ServiceController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.services.destroy');
    });

    Route::group(['prefix'=>'portfolios'],function () {
        Route::get('/', [PortfolioController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.portfolios');
        Route::get('/create', [PortfolioController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.portfolios.create');
        Route::post('/create', [PortfolioController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.portfolios.store');
        Route::get('/edit/{id}', [PortfolioController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.portfolios.edit');
        Route::post('/edit/{id}', [PortfolioController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.portfolios.update');
        Route::post('/destroy/{id}', [PortfolioController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.portfolios.destroy');
    });

    Route::group(['prefix'=>'partners'],function () {
        Route::get('/', [PartnerController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.partners');
        Route::get('/create', [PartnerController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.partners.create');
        Route::post('/create', [PartnerController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.partners.store');
        Route::get('/edit/{id}', [PartnerController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.partners.edit');
        Route::post('/edit/{id}', [PartnerController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.partners.update');
        Route::post('/destroy/{id}', [PartnerController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.partners.destroy');
    });

    Route::group(['prefix'=>'faqs'],function () {
        Route::get('/', [FaqController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.faqs');
        Route::get('/create', [FaqController::class, 'create'])->middleware(['auth', 'verified'])->name('admin.faqs.create');
        Route::post('/create', [FaqController::class, 'store'])->middleware(['auth', 'verified'])->name('admin.faqs.store');
        Route::get('/edit/{id}', [FaqController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.faqs.edit');
        Route::post('/edit/{id}', [FaqController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.faqs.update');
        Route::post('/destroy/{id}', [FaqController::class, 'destroy'])->middleware(['auth', 'verified'])->name('admin.faqs.destroy');
    });

    Route::group(['prefix'=>'orders'],function () {
        Route::get('/', [OrderController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.orders');
        Route::get('/show/{id}', [OrderController::class, 'edit'])->middleware(['auth', 'verified'])->name('admin.orders.edit');
        Route::patch('/', [OrderController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.orders.update');
        // Route::post('/pay',[OrderController::class, 'pay'])->middleware(['auth', 'verified'])->name('admin.orders.pay');
    });

    Route::group(['prefix'=>'labels'],function () {
        Route::get('/', [LabelController::class, 'index'])->middleware(['auth', 'verified'])->name('admin.labels');
        Route::post('/', [LabelController::class, 'update'])->middleware(['auth', 'verified'])->name('admin.labels.update');
    });
    
    Route::group(['prefix'=>'profile'],function () {
        Route::get('/', [ProfileController::class, 'edit'])->middleware(['auth', 'verified'])->name('profile.edit');
        Route::patch('/', [ProfileController::class, 'update'])->middleware(['auth', 'verified'])->name('profile.update');
        Route::delete('/', [ProfileController::class, 'destroy'])->middleware(['auth', 'verified'])->name('profile.destroy');
    });

});

require __DIR__.'/auth.php';
