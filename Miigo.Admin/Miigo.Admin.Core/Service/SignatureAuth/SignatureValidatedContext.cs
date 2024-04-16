﻿
using Microsoft.AspNetCore.Authentication;
namespace Miigo.Admin.Core;

/// <summary>
/// Signature 身份验证已验证上下文
/// </summary>
public class SignatureValidatedContext : ResultContext<SignatureAuthenticationOptions>
{
    public SignatureValidatedContext(HttpContext context,
        AuthenticationScheme scheme,
        SignatureAuthenticationOptions options)
        : base(context, scheme, options)
    {
    }

    /// <summary>
    /// 身份标识
    /// </summary>
    public string AccessKey { get; set; }

    /// <summary>
    /// 密钥
    /// </summary>
    public string AccessSecret { get; set; }
    public SysOpenAccess OpenAccess { get; set; }
}