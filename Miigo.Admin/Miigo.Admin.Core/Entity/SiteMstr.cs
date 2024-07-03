namespace Miigo.Admin.Core;

/// <summary>
/// 站点主表
/// </summary>
[SugarTable("SiteMstr","站点主表")]
public class SiteMstr  : EntityTenant
{
    /// <summary>
    /// 名称
    /// </summary>
    [SugarColumn(ColumnName = "Name", ColumnDescription = "名称", Length = 100)]
    public string? Name { get; set; }
    
    /// <summary>
    /// 图标
    /// </summary>
    [SugarColumn(ColumnName = "Logo", ColumnDescription = "图标", Length = 32)]
    public string? Logo { get; set; }
    
    /// <summary>
    /// 描述
    /// </summary>
    [SugarColumn(ColumnName = "Desc", ColumnDescription = "描述", Length = 500)]
    public string? Desc { get; set; }
    
    /// <summary>
    /// 状态
    /// </summary>
    [SugarColumn(ColumnName = "Status", ColumnDescription = "状态")]
    public SiteStatusEnum Status { get; set; }
    
    /// <summary>
    /// 过期时间
    /// </summary>
    [SugarColumn(ColumnName = "ExpiredTime", ColumnDescription = "过期时间")]
    public DateTime? ExpiredTime { get; set; }
    
    /// <summary>
    /// Url地址
    /// </summary>
    [SugarColumn(ColumnName = "Url", ColumnDescription = "Url地址", Length = 500)]
    public string? Url { get; set; }
    
    /// <summary>
    /// 创建者姓名
    /// </summary>
    [SugarColumn(ColumnName = "CreateUserName", ColumnDescription = "创建者姓名", Length = 64)]
    public string? CreateUserName { get; set; }
    
    /// <summary>
    /// 修改者姓名
    /// </summary>
    [SugarColumn(ColumnName = "UpdateUserName", ColumnDescription = "修改者姓名", Length = 64)]
    public string? UpdateUserName { get; set; }
    
}
