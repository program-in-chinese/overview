import os
import tarfile
import urllib
import pandas as pd
默认路径 = os.path.join("datasets", "housing")
def 载入房屋数据(存储路径 = 默认数据存储路径):
    csv_路径 = os.path.join(存储路径, "housing.csv")
    return pd.read_csv(csv_路径)
房屋数据 = 载入房屋数据()
房屋数据.head()
房屋数据.info()
房屋数据["ocean_proximity"].value_counts()
房屋数据.describe()
%matplotlib inline
import matplotlib.pyplot as 绘图
房屋数据.hist(bins=50, figsize=(20, 15))
绘图.show()

import numpy as np

def 分割训练集与测试集(数据, 测试集占比):
    随机序号 = np.random.permutation(len(数据))
    测试集大小 = int(len(数据) * 测试集占比)
    测试集序号 = 随机序号[:测试集大小]
    训练集序号 = 随机序号[测试集大小:]
    return 数据.iloc[训练集序号], 数据.iloc[测试集序号]
    #pandas数据选取方法iloc(行序号/数组, 列序号/数组)

训练集, 测试集 = 分割训练集与测试集(房屋数据, 0.2)
#更新数据后, 保持原测试集不变

from zlib import crc32

def 测试集检测(标识符, 测试集占比):
    return crc32(np.int64(标识符)) & 0xffffffff < 测试集占比 * 2**32

def 通过id分割训练集与测试集(数据, 测试集占比, id所在列):
    # id == 标识符
    标识符集 = 数据[id所在列]
    属于测试集 = 标识符集.apply(lambda 标识符: 测试集检测(标识符, 测试集占比))
    return 数据.loc[~属于测试集], 数据.loc[属于测试集]
    # ~ 按位取反
    
    
房屋数据_带序号 = 房屋数据.reset_index() #添加'index'列
训练集, 测试集 = 通过id分割训练集与测试集(房屋数据_带序号, 0.2,
                        "index")
#若数据可能被删除, 序号易改变, 则可考虑使用经纬度构造id
房屋数据_带序号["id"] = 房屋数据["longitude"] * 1000 + 房屋数据["latitude"]
训练集, 测试集 = 通过id分割训练集与测试集(房屋数据_带序号, 0.2,
                        "id")
#测试分割结果
#print(str(len(训练集)) + '+' + str(len(测试集)) + '=' + str(len(房屋数据_带序号)))
from sklearn.model_selection import train_test_split as 分割训练与测试集
训练集, 测试集 = 分割训练与测试集(房屋数据, test_size=0.2, random_state=42)
房屋数据["收入分类"] = pd.cut(房屋数据["median_income"],
                            bins=[0.0,1.5,3.0,4.5,6.,np.inf],
                             labels=[1,2,3,4,5])
房屋数据["收入分类"].hist()
from sklearn.model_selection import StratifiedShuffleSplit as 分层随机分割

分割 = 分层随机分割(n_splits=1, test_size=0.2, random_state=42)
for 训练集序号, 测试集序号 in 分割.split(房屋数据, 房屋数据["收入分类"]):
    分层训练集 = 房屋数据.loc[训练集序号]
    分层测试集 = 房屋数据.loc[测试集序号]
    
分层测试集["收入分类"].value_counts() / len(分层测试集)

分层训练集["收入分类"].value_counts() / len(分层训练集)

for 数据集 in (分层训练集, 分层测试集):
    数据集.drop("收入分类", axis=1, inplace=True)
    
房屋数据 = 分层训练集.copy()
房屋数据.plot(kind="scatter", x="longitude", y="latitude")
房屋数据.plot(kind="scatter", x="longitude", y="latitude", alpha=0.1)
房屋数据.plot(kind="scatter", 
          x="longitude", y="latitude", alpha=0.4,
          s=房屋数据['population']/100,
          label='人口', figsize=(10, 7),
          c='median_house_value', cmap=plt.get_cmap('jet'),
          colorbar=True)
plt.legend()
相关系数矩阵 = 房屋数据.corr()
相关系数矩阵['median_house_value'].sort_values(ascending=False)
from pandas.plotting import scatter_matrix as 散点图矩阵
属性 = ['median_house_value', 'median_income', 'total_rooms',
        'housing_median_age']
散点图矩阵(房屋数据[属性], figsize=(12, 8))
房屋数据.plot(kind='scatter', x='median_income',
             y='median_house_value', alpha=0.1)
房屋数据['每户房间数'] = 房屋数据['total_rooms'] / 房屋数据['households']

房屋数据['每房间卧室数'] = 房屋数据['total_bedrooms'] / 房屋数据['total_rooms']

房屋数据['每户人口'] = 房屋数据['population'] / 房屋数据['households']
#'每户房间数','每房间卧室数','每户人口'
#房屋数据.drop(['每户房间数', '每房间卧室数', '每户人口'], axis='columns')
相关系数矩阵 = 房屋数据.corr()
相关系数矩阵['median_house_value'].sort_values(ascending=False)
房屋数据 = 分层训练集.drop("median_house_value", axis=1)
房屋数据_标记 = 分层训练集['median_house_value'].copy()
"""
如何处理含空值数据?
选项一 去掉含空值的街区
房屋数据.dropna(subset=['total_bedrooms']) 
选项二 去掉含空值的整个属性
房屋数据.drop('total_bedrooms', axis=1)
选项三 给空值指定数值
中位数 = 住房数据['total_bedrooms'].median()
住房数据['total_bedrooms'].fillna(中位数, implace=True)
"""
from sklearn.impute import SimpleImputer

平均值填空器 = SimpleImputer(strategy='median')
房屋数据_仅数值 = 房屋数据.drop('ocean_proximity', axis=1)
平均值填空器.fit(房屋数据_仅数值)
平均值填空器.statistics_
房屋数据_仅数值.median().values
X = 平均值填空器.transform(房屋数据_仅数值)
房屋数据_转换后 = pd.DataFrame(X, columns=房屋数据_仅数值.columns,
                             index=房屋数据_仅数值.index)
房屋数据_类别 = 房屋数据[['ocean_proximity']]
房屋数据_类别.head(10)
from sklearn.preprocessing import OrdinalEncoder
转数值编码器 = OrdinalEncoder()
房屋数据_类别_已编码 = 转数值编码器.fit_transform(房屋数据_类别)
房屋数据_类别_已编码[:10]
转数值编码器.categories_
from sklearn.preprocessing import OneHotEncoder
类别编码器 = OneHotEncoder()
房屋数据_类别_独热 = 类别编码器.fit_transform(房屋数据_类别)
房屋数据_类别_独热
房屋数据_类别_独热.toarray()
from sklearn.base import BaseEstimator, TransformerMixin

rooms_ix, bedrooms_ix, population_ix, households_ix = 3, 4, 5, 6

class 属性组合器(BaseEstimator, TransformerMixin):
    def __init__(self, add_bedrooms_per_room = True):
        self.add_bedrooms_per_room = add_bedrooms_per_room
    
    def fit(self, X, y=None):
        return self
    
    def transform(self, X, y=None):
        rooms_per_household = X[:, population_ix] / X[:, households_ix]
        population_per_household = X[:, population_ix] / X[:, households_ix]
        if self.add_bedrooms_per_room:
            bedrooms_per_room = X[:, bedrooms_ix] / X[:, rooms_ix]
            return np.c_[X, rooms_per_household, population_per_household, bedrooms_per_room]
        else:
            return np.c_[X, rooms_per_household, population_per_household]
    
   
attr_adder = 属性组合器(add_bedrooms_per_room=False)
房屋数据_含额外属性 = attr_adder.transform(房屋数据.values)
from sklearn.pipeline import Pipeline as 流水线
from sklearn.preprocessing import StandardScaler as 规范器
#流水线(Pipeline) 按顺序依次用函数处理数据
数值流水线 = 流水线([
    ('平均值填空', SimpleImputer(strategy='median')),
    ('属性增加', 属性组合器()),
    ('规范化', 规范器()),
])
房屋数据_仅数值_转换后 = 数值流水线.fit_transform(房屋数据_仅数值)
from sklearn.compose import ColumnTransformer as 列转换器

数值属性 = list(房屋数据_仅数值)
类别属性 = ['ocean_proximity']
独热编码器 = OneHotEncoder

完整流水线 = 列转换器([
    ('数值', 数值流水线, 数值属性),
    ('类别', 独热编码器(), 类别属性),
])

房屋数据_预处理后 = 完整流水线.fit_transform(房屋数据)
#用线性模型训练数据
from sklearn.linear_model import LinearRegression
线性回归 = LinearRegression()
线性回归.fit(房屋数据_预处理后, 房屋数据_标记)
#测试线性回归模型
一些数据 = 房屋数据.iloc[:5]
一些标记 = 房屋数据_标记.iloc[:5]
一些数据_预处理后 = 完整流水线.transform(一些数据)
线性回归预测值 = 线性回归.predict(一些数据_预处理后)
原标记值 = list(一些标记)
print("预测值: ", [int(x) for x in 线性回归预测值])
print("标记值: ", [int(x) for x in 原标记值])
print("误差率: ", [' ' + str(int((原标记值[i] - 线性回归预测值[i]) * 100 / 原标记值[i])) + '%' for i in range(len(原标记值))])
#计算线性模型的标准差
from sklearn.metrics import mean_squared_error as 均方误差
房屋数据_预测值 = 线性回归.predict(房屋数据_预处理后)
线性_均方误差 = 均方误差(房屋数据_标记, 房屋数据_预测值)
线性_均方根误差 = np.sqrt(线性_均方误差)
print(线性_均方根误差)
#用决策树回归器模型训练
from sklearn.tree import DecisionTreeRegressor
决策树回归器 = DecisionTreeRegressor()
决策树回归器.fit(房屋数据_预处理后, 房屋数据_标记)
#计算决策树模型的均方根误差
房屋数据_预测值 = 决策树回归器.predict(房屋数据_预处理后)
决策树_均方误差 = 均方误差(房屋数据_标记, 房屋数据_预测值)
决策树_均方根误差 = np.sqrt(决策树_均方误差)
print(决策树_均方根误差)
#10折交叉验证训练决策树
from sklearn.model_selection import cross_val_score as 交叉验证打分

负均方误差 = 'neg_mean_squared_error'

得分 = 交叉验证打分(决策树回归器, 房屋数据_预处理后, 房屋数据_标记,
                   scoring=负均方误差, cv=10)
决策树_均方根_得分 = np.sqrt(-得分) 
#打分用的是功效函数,即负均方根, 得分一般用损失函数,故取负
def 显示分数(得分):
    print("得分:", 得分)
    print('平均值:', 得分.mean())
    print('标准差:', 得分.std())
显示分数(决策树_均方根_得分)
线性回归_得分 = 交叉验证打分(线性回归, 房屋数据_预处理后, 房屋数据_标记,
                        scoring=负均方误差, cv=10)
线性回归_均方根_得分 = np.sqrt(-线性回归_得分)
显示分数(线性回归_均方根_得分)
#用随机森林回归器训练
from sklearn.ensemble import RandomForestRegressor
随机森林回归 = RandomForestRegressor()
随机森林回归.fit(房屋数据_预处理后, 房屋数据_标记)


随机森林_得分 = 交叉验证打分(随机森林回归, 房屋数据_预处理后, 房屋数据_标记,
                        scoring=负均方误差, cv=10)
随机森林_均方根_得分 = np.sqrt(-随机森林_得分)
显示分数(随机森林_均方根_得分)
房屋数据_预测值 = 随机森林回归.predict(房屋数据_预处理后)
随机森林_均方误差 = 均方误差(房屋数据_标记, 房屋数据_预测值)
随机森林_均方根误差 = np.sqrt(随机森林_均方误差)
print(随机森林_均方根误差)
#保存模型
import joblib
joblib.dump(随机森林回归, '随机森林回归.pkl')
#精校参数 Grid Search 翻译为网格穷举比较好
from sklearn.model_selection import GridSearchCV

网格参数 = [
    {'n_estimators':[3, 10, 30], 'max_features':[2, 4, 6, 8]},
    {'bootstrap': [False], 'n_estimators': [3, 10], 'max_features': [2, 3, 4]},
]
随机森林回归 = RandomForestRegressor()
网格穷举 = GridSearchCV(随机森林回归, 网格参数, cv=5,
                   scoring=负均方误差,
                   return_train_score=True)
网格穷举.fit(房屋数据_预处理后, 房屋数据_标记)
print(网格穷举.best_params_)
#与书本不一样的原因: 添加重复属性
print(list(房屋数据_预处理后))
print(网格穷举.best_estimator_)
验证结果 = 网格穷举.cv_results_
for 平均分, 参数 in zip(验证结果['mean_test_score'],
                  验证结果['params']):
    print(np.sqrt(-平均分), 参数)
特征重要性 = 网格穷举.best_estimator_.feature_importances_
print(特征重要性)
#输出每属性的重要性
额外属性 = ['每户房间数','每户人口','每房间卧室数']
类别编码器 = 完整流水线.named_transformers_['类别']
类别_独热属性 = list(类别编码器.categories_[0])
属性 = 数值属性 + 额外属性 + 类别_独热属性
for x in sorted(zip(特征重要性, 属性), reverse=True):
    print('{}\n'.format(x))
最终模型 = 网格穷举.best_estimator_

测试集特征 = 分层测试集.drop("median_house_value", axis='columns')
测试集标记 = 分层测试集["median_house_value"].copy()

测试集特征_预处理后 = 完整流水线.transform(测试集特征)

最终预测值 = 最终模型.predict(测试集特征_预处理后)

最终均方误差 = 均方误差(测试集标记, 最终预测值)
最终均方根误差 = np.sqrt(最终均方误差)
print(最终均方根误差)
#求置信区间
from scipy import stats as 统计
置信度 = 0.95
方差 = (最终预测值 - 测试集标记) ** 2
置信区间 = np.sqrt(统计.t.interval(置信度, len(方差) - 1,
                            loc=方差.mean(),
                            scale=统计.sem(方差)))
print(置信区间)
