﻿
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
namespace Miigo.Admin.Application;

[AppStartup(100)]
public class Startup : AppStartup
{
    public void ConfigureServices(IServiceCollection services)
    {
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
    }
}