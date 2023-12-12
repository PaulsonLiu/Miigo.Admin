
namespace Miigo.Admin.Core;

/// <summary>
/// 系统租户表种子数据
/// </summary>
public class SysTenantSeedData : ISqlSugarEntitySeedData<SysTenant>
{
    /// <summary>
    /// 种子数据
    /// </summary>
    /// <returns></returns>
    public IEnumerable<SysTenant> HasData()
    {
        var defaultDbConfig = App.GetOptions<DbConnectionOptions>().ConnectionConfigs[0];

        return new[]
        {
            new SysTenant{ Id=1300000000001, OrgId=1300000000101, UserId=1300000000111, Host="www.dilon.vip", TenantType=TenantTypeEnum.Id, DbType=defaultDbConfig.DbType, Connection=defaultDbConfig.ConnectionString, ConfigId=SqlSugarConst.MainConfigId, Remark="系统默认", CreateTime=DateTime.Parse("2022-02-10 00:00:00") },
        };
    }
}