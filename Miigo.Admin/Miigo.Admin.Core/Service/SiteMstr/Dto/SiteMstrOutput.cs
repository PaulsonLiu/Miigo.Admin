namespace Miigo.Admin.Core;

/// <summary>
/// SiteMstr输出参数
/// </summary>
public class SiteMstrOutput
{
    /// <summary>
    /// Id
    /// </summary>
    public long Id { get; set; }
    
    /// <summary>
    /// 名称
    /// </summary>
    public string? Name { get; set; }
    
    /// <summary>
    /// 图标
    /// </summary>
    public string? Logo { get; set; }
    public SysFile LogoAttachment { get; set; }
    
    /// <summary>
    /// 描述
    /// </summary>
    public string? Desc { get; set; }
    
    /// <summary>
    /// 状态
    /// </summary>
    public SiteStatusEnum Status { get; set; }
    
    /// <summary>
    /// 过期时间
    /// </summary>
    public DateTime? ExpiredTime { get; set; }
    
    /// <summary>
    /// Url地址
    /// </summary>
    public string? Url { get; set; }
    
    /// <summary>
    /// 创建者姓名
    /// </summary>
    public string? CreateUserName { get; set; }
    
    /// <summary>
    /// 修改者姓名
    /// </summary>
    public string? UpdateUserName { get; set; }
    
    }
 

