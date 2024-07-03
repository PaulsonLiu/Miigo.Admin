using Miigo.Admin.Core;
using System.ComponentModel.DataAnnotations;
namespace Miigo.Admin.Core;

    /// <summary>
    /// SiteMstr基础输入参数
    /// </summary>
    public class SiteMstrBaseInput
    {
        /// <summary>
        /// 名称
        /// </summary>
        public virtual string? Name { get; set; }
        
        /// <summary>
        /// 图标
        /// </summary>
        public virtual string? Logo { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public virtual string? Desc { get; set; }
        
        /// <summary>
        /// 状态
        /// </summary>
        public virtual SiteStatusEnum Status { get; set; }
        
        /// <summary>
        /// 过期时间
        /// </summary>
        public virtual DateTime? ExpiredTime { get; set; }
        
        /// <summary>
        /// Url地址
        /// </summary>
        public virtual string? Url { get; set; }
        
        /// <summary>
        /// 创建者姓名
        /// </summary>
        public virtual string? CreateUserName { get; set; }
        
        /// <summary>
        /// 修改者姓名
        /// </summary>
        public virtual string? UpdateUserName { get; set; }
        
    }

    /// <summary>
    /// SiteMstr分页查询输入参数
    /// </summary>
    public class SiteMstrInput : BasePageInput
    {
        /// <summary>
        /// 关键字查询
        /// </summary>
        public string? SearchKey { get; set; }

        /// <summary>
        /// Id
        /// </summary>
        public long? Id { get; set; }
        
        /// <summary>
        /// 名称
        /// </summary>
        public string? Name { get; set; }
        
        /// <summary>
        /// 描述
        /// </summary>
        public string? Desc { get; set; }
        
        /// <summary>
        /// 状态
        /// </summary>
        public SiteStatusEnum? Status { get; set; }
        
    }

    /// <summary>
    /// SiteMstr增加输入参数
    /// </summary>
    public class AddSiteMstrInput : SiteMstrBaseInput
    {
    }

    /// <summary>
    /// SiteMstr删除输入参数
    /// </summary>
    public class DeleteSiteMstrInput : BaseIdInput
    {
    }

    /// <summary>
    /// SiteMstr更新输入参数
    /// </summary>
    public class UpdateSiteMstrInput : SiteMstrBaseInput
    {
        /// <summary>
        /// Id
        /// </summary>
        [Required(ErrorMessage = "Id不能为空")]
        public long Id { get; set; }
        
    }

    /// <summary>
    /// SiteMstr主键查询输入参数
    /// </summary>
    public class QueryByIdSiteMstrInput : DeleteSiteMstrInput
    {

    }
