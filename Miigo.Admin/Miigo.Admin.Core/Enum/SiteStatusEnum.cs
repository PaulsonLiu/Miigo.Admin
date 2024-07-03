
namespace Miigo.Admin.Core;

/// <summary>
/// 通用状态枚举
/// </summary>
[Description("站点状态枚举")]
public enum SiteStatusEnum
{
    /// <summary>
    /// 启用
    /// </summary>
    [Description("启用")]
    Enable = 1,
    /// <summary>
    /// 停用
    /// </summary>
    [Description("停用")]
    Disable = 2,

    /// <summary>
    /// 测试中
    /// </summary>
    [Description("测试中")]
    Testing = 3,
}