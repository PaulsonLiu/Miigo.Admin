﻿





using Miigo.Admin.Core;
using AspNetCoreRateLimit;
using Furion;
using Microsoft.Extensions.DependencyInjection;
namespace Miigo.Admin.Web.Core;

public static class ProjectOptions
{
    /// <summary>
    /// 注册项目配置选项
    /// </summary>
    /// <param name="services"></param>
    /// <returns></returns>
    public static IServiceCollection AddProjectOptions(this IServiceCollection services)
    {
        services.AddConfigurableOptions<DbConnectionOptions>();
        services.AddConfigurableOptions<SnowIdOptions>();
        services.AddConfigurableOptions<CacheOptions>();
        services.AddConfigurableOptions<ClusterOptions>();
        services.AddConfigurableOptions<OSSProviderOptions>();
        services.AddConfigurableOptions<UploadOptions>();
        services.AddConfigurableOptions<WechatOptions>();
        services.AddConfigurableOptions<WechatPayOptions>();
        services.AddConfigurableOptions<PayCallBackOptions>();
        services.AddConfigurableOptions<CodeGenOptions>();
        services.AddConfigurableOptions<EnumOptions>();
        services.AddConfigurableOptions<APIJSONOptions>();
        services.AddConfigurableOptions<EmailOptions>();
        services.AddConfigurableOptions<OAuthOptions>();
        services.AddConfigurableOptions<CryptogramOptions>();
        services.AddConfigurableOptions<SMSOptions>();
        //services.AddConfigurableOptions<IpRateLimitingOptions>();
        //services.AddConfigurableOptions<IpRateLimitPoliciesOptions>();
        //services.AddConfigurableOptions<ClientRateLimitingOptions>();
        //services.AddConfigurableOptions<ClientRateLimitPoliciesOptions>();
        services.Configure<IpRateLimitOptions>(App.Configuration.GetSection("IpRateLimiting"));
        services.Configure<IpRateLimitPolicies>(App.Configuration.GetSection("IpRateLimitPolicies"));
        services.Configure<ClientRateLimitOptions>(App.Configuration.GetSection("ClientRateLimiting"));
        services.Configure<ClientRateLimitPolicies>(App.Configuration.GetSection("ClientRateLimitPolicies"));

        return services;
    }
}