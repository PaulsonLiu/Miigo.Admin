﻿





using Miigo.Admin.Plugin.GoView.Util;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
namespace Miigo.Admin.Plugin.GoView;

[AppStartup(100)]
public class Startup : AppStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
        // 注册 GoView 规范化处理提供器
        services.AddUnifyProvider<GoViewResultProvider>("GoView");
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
    }
}