
namespace Miigo.Admin.Core.Service;
/// <summary>
/// SiteMstr服务
/// </summary>
[ApiDescriptionSettings(Order = 100)]
public class SiteMstrService : IDynamicApiController, ITransient
{
    private readonly SqlSugarRepository<SiteMstr> _rep;
    public SiteMstrService(SqlSugarRepository<SiteMstr> rep)
    {
        _rep = rep;
    }

    /// <summary>
    /// 分页查询SiteMstr
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Page")]
    public async Task<SqlSugarPagedList<SiteMstrOutput>> Page(SiteMstrInput input)
    {
        var query= _rep.AsQueryable()
            .WhereIF(!string.IsNullOrWhiteSpace(input.SearchKey), u =>
                u.Name.Contains(input.SearchKey.Trim())
                || u.Desc.Contains(input.SearchKey.Trim())
            )
            .WhereIF(input.Id>0, u => u.Id == input.Id)
            .WhereIF(!string.IsNullOrWhiteSpace(input.Name), u => u.Name.Contains(input.Name.Trim()))
            .WhereIF(!string.IsNullOrWhiteSpace(input.Desc), u => u.Desc.Contains(input.Desc.Trim()))
            .WhereIF(input.Status.HasValue, u => u.Status == input.Status)
            //处理外键和TreeSelector相关字段的连接
            .Select((u)=> new SiteMstrOutput{
                Id = u.Id, 
                Name = u.Name, 
                Logo = u.Logo, 
                Desc = u.Desc, 
                Status = u.Status, 
                ExpiredTime = u.ExpiredTime, 
                Url = u.Url, 
                CreateUserName = u.CreateUserName, 
                UpdateUserName = u.UpdateUserName, 
            })
            //.Mapper(c => c.LogoAttachment, c => c.Logo)
;
        query = query.OrderBuilder(input, "", "CreateTime");
        return await query.ToPagedListAsync(input.Page, input.PageSize);
    }

    /// <summary>
    /// 增加SiteMstr
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Add")]
    public async Task Add(AddSiteMstrInput input)
    {
        var entity = input.Adapt<SiteMstr>();
        await _rep.InsertAsync(entity);
    }

    /// <summary>
    /// 删除SiteMstr
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Delete")]
    public async Task Delete(DeleteSiteMstrInput input)
    {
        var entity = await _rep.GetFirstAsync(u => u.Id == input.Id) ?? throw Oops.Oh(ErrorCodeEnum.D1002);
        await _rep.FakeDeleteAsync(entity);   //假删除
        //await _rep.DeleteAsync(entity);   //真删除
    }

    /// <summary>
    /// 更新SiteMstr
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpPost]
    [ApiDescriptionSettings(Name = "Update")]
    public async Task Update(UpdateSiteMstrInput input)
    {
        var entity = input.Adapt<SiteMstr>();
        await _rep.AsUpdateable(entity).IgnoreColumns(ignoreAllNullColumns: true).ExecuteCommandAsync();
    }

    /// <summary>
    /// 获取SiteMstr
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "Detail")]
    public async Task<SiteMstr> Get([FromQuery] QueryByIdSiteMstrInput input)
    {
        return await _rep.GetFirstAsync(u => u.Id == input.Id);
    }

    /// <summary>
    /// 获取SiteMstr列表
    /// </summary>
    /// <param name="input"></param>
    /// <returns></returns>
    [HttpGet]
    [ApiDescriptionSettings(Name = "List")]
    public async Task<List<SiteMstrOutput>> List([FromQuery] SiteMstrInput input)
    {
        return await _rep.AsQueryable().Select<SiteMstrOutput>().ToListAsync();
    }


    /// <summary>
    /// 上传图标
    /// </summary>
    /// <param name="file"></param>
    /// <returns></returns>
    [ApiDescriptionSettings(Name = "UploadLogo"), HttpPost]
    public async Task<FileOutput> UploadLogo([Required] IFormFile file)
    {
            var service = App.GetService<SysFileService>();
            return await service.UploadFile(file, "upload/Logo"); 
    } 



}

