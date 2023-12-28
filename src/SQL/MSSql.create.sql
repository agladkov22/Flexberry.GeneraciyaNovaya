



CREATE TABLE [Заявки] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаЗаявки] DATETIME  NULL,

	 [Количество] INT  NULL,

	 [НаименДетали] VARCHAR(255)  NULL,

	 [НомерЗаявки] INT  NULL,

	 [Цена] REAL  NULL,

	 [Клиенты] UNIQUEIDENTIFIER  NOT NULL,

	 [Материалы] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧТехКарты] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ПунктРаботы] INT  NULL,

	 [СоставРабот] VARCHAR(255)  NULL,

	 [Материалы] UNIQUEIDENTIFIER  NOT NULL,

	 [Оборудование] UNIQUEIDENTIFIER  NOT NULL,

	 [ТехКарты] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТчЧертежи] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Версия] REAL  NULL,

	 [ДатаИзм] DATETIME  NULL,

	 [ИмяФайла] VARCHAR(255)  NULL,

	 [Расширение] VARCHAR(4)  NULL,

	 [Чертежи] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Оборудование] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ID] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Состояние] VARCHAR(9)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТехКарты] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [НомерКарты] INT  NULL,

	 [Чертежи] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Клиенты] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ID] INT  NULL,

	 [Банк] VARCHAR(255)  NULL,

	 [ИНН] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Ответственный] VARCHAR(255)  NULL,

	 [Почта] VARCHAR(255)  NULL,

	 [РасСчет] INT  NULL,

	 [Телефон] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Материалы] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ID] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Склады] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Склады] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ID] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Чертежи] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаСоздания] DATETIME  NULL,

	 [НаименЧертеж] VARCHAR(255)  NULL,

	 [Заявки] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




