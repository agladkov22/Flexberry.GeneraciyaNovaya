



CREATE TABLE "Заявки"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерЗаявки" NUMBER(10) NULL,

	"ДатаЗаявки" DATE NULL,

	"НаименДетали" NVARCHAR2(255) NULL,

	"Количество" NUMBER(10) NULL,

	"Цена" FLOAT(53) NULL,

	"Клиенты" RAW(16) NOT NULL,

	"Материалы" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧТехКарты"
(

	"primaryKey" RAW(16) NOT NULL,

	"СоставРабот" NVARCHAR2(255) NULL,

	"ПунктРаботы" NUMBER(10) NULL,

	"Оборудование" RAW(16) NOT NULL,

	"Материалы" RAW(16) NOT NULL,

	"ТехКарты" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТчЧертежи"
(

	"primaryKey" RAW(16) NOT NULL,

	"ИмяФайла" NVARCHAR2(255) NULL,

	"Расширение" NVARCHAR2(4) NULL,

	"ДатаИзм" DATE NULL,

	"Версия" FLOAT(53) NULL,

	"Чертежи" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оборудование"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Состояние" NVARCHAR2(9) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТехКарты"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерКарты" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Чертежи" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиенты"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Ответственный" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Почта" NVARCHAR2(255) NULL,

	"Банк" NVARCHAR2(255) NULL,

	"РасСчет" NUMBER(10) NULL,

	"ИНН" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Материалы"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Склады" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склады"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Чертежи"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаименЧертеж" NVARCHAR2(255) NULL,

	"ДатаСоздания" DATE NULL,

	"Заявки" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Заявки"
	ADD CONSTRAINT "Заявки_FКлиенты_0" FOREIGN KEY ("Клиенты") REFERENCES "Клиенты" ("primaryKey");

CREATE INDEX "Заявки_IКлиенты" on "Заявки" ("Клиенты");

ALTER TABLE "Заявки"
	ADD CONSTRAINT "Заявки_FМатер_4884" FOREIGN KEY ("Материалы") REFERENCES "Материалы" ("primaryKey");

CREATE INDEX "Заявки_IМатер_3588" on "Заявки" ("Материалы");

ALTER TABLE "ТЧТехКарты"
	ADD CONSTRAINT "ТЧТехКарты_FО_4850" FOREIGN KEY ("Оборудование") REFERENCES "Оборудование" ("primaryKey");

CREATE INDEX "ТЧТехКарты_IО_2150" on "ТЧТехКарты" ("Оборудование");

ALTER TABLE "ТЧТехКарты"
	ADD CONSTRAINT "ТЧТехКарты_FМ_7271" FOREIGN KEY ("Материалы") REFERENCES "Материалы" ("primaryKey");

CREATE INDEX "ТЧТехКарты_IМ_9576" on "ТЧТехКарты" ("Материалы");

ALTER TABLE "ТЧТехКарты"
	ADD CONSTRAINT "ТЧТехКарты_FТ_2927" FOREIGN KEY ("ТехКарты") REFERENCES "ТехКарты" ("primaryKey");

CREATE INDEX "ТЧТехКарты_IТ_3460" on "ТЧТехКарты" ("ТехКарты");

ALTER TABLE "ТчЧертежи"
	ADD CONSTRAINT "ТчЧертежи_FЧе_8560" FOREIGN KEY ("Чертежи") REFERENCES "Чертежи" ("primaryKey");

CREATE INDEX "ТчЧертежи_IЧе_8933" on "ТчЧертежи" ("Чертежи");

ALTER TABLE "ТехКарты"
	ADD CONSTRAINT "ТехКарты_FЧер_9858" FOREIGN KEY ("Чертежи") REFERENCES "Чертежи" ("primaryKey");

CREATE INDEX "ТехКарты_IЧерт_522" on "ТехКарты" ("Чертежи");

ALTER TABLE "Материалы"
	ADD CONSTRAINT "Материалы_FСк_2501" FOREIGN KEY ("Склады") REFERENCES "Склады" ("primaryKey");

CREATE INDEX "Материалы_IСк_6611" on "Материалы" ("Склады");

ALTER TABLE "Чертежи"
	ADD CONSTRAINT "Чертежи_FЗаявки_0" FOREIGN KEY ("Заявки") REFERENCES "Заявки" ("primaryKey");

CREATE INDEX "Чертежи_IЗаявки" on "Чертежи" ("Заявки");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


