
import httpx
import uuid
import MysqlConfig


async def get(url, timeout=3):
    async with httpx.AsyncClient() as client:
        resp = await client.get(url, timeout=timeout)
        return resp


async def get_list团伙关联数据(list身份证号):
    # 获取团伙关联表的信息（by 身份证号）
    # return： [{name:'', id:''}]
    if list身份证号:
        condition = f"FIND_IN_SET(sfzh,'{','.join(list身份证号)}')"
        url = f'{MysqlConfig.api_团伙关联}?condition={condition}'
        resp = await get(url)
        out = resp.json()
    else:
        out = []
    return out
