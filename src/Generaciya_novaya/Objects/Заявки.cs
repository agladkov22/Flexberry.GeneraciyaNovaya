﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Generaciya_novaya
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заявки.
    /// </summary>
    // *** Start programmer edit section *** (Заявки CustomAttributes)

    // *** End programmer edit section *** (Заявки CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаявкиE", new string[] {
            "НомерЗаявки as \'Номер заявки\'",
            "ДатаЗаявки as \'Дата заявки\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.Наименование as \'Клиент\'",
            "Материалы as \'Материалы\'",
            "Материалы.Наименование as \'Материал\'",
            "НаименДетали as \'Наименование детали\'",
            "Количество as \'Количество\'"}, Hidden=new string[] {
            "Клиенты.Наименование",
            "Материалы.Наименование"})]
    [MasterViewDefineAttribute("ЗаявкиE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ЗаявкиE", "Материалы", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ЗаявкиL", new string[] {
            "НомерЗаявки as \'Номер заявки\'",
            "ДатаЗаявки as \'Дата заявки\'",
            "Клиенты.Наименование as \'Клиент\'",
            "НаименДетали as \'Наименование детали\'",
            "Материалы.Наименование as \'Материал\'",
            "Количество as \'Количество\'"})]
    public class Заявки : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерЗаявки;
        
        private System.DateTime fДатаЗаявки;
        
        private string fНаименДетали;
        
        private int fКоличество;
        
        private float fЦена;
        
        private IIS.Generaciya_novaya.Клиенты fКлиенты;
        
        private IIS.Generaciya_novaya.Материалы fМатериалы;
        
        // *** Start programmer edit section *** (Заявки CustomMembers)

        // *** End programmer edit section *** (Заявки CustomMembers)

        
        /// <summary>
        /// ДатаЗаявки.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.ДатаЗаявки CustomAttributes)

        // *** End programmer edit section *** (Заявки.ДатаЗаявки CustomAttributes)
        public virtual System.DateTime ДатаЗаявки
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.ДатаЗаявки Get start)

                // *** End programmer edit section *** (Заявки.ДатаЗаявки Get start)
                System.DateTime result = this.fДатаЗаявки;
                // *** Start programmer edit section *** (Заявки.ДатаЗаявки Get end)

                // *** End programmer edit section *** (Заявки.ДатаЗаявки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.ДатаЗаявки Set start)

                // *** End programmer edit section *** (Заявки.ДатаЗаявки Set start)
                this.fДатаЗаявки = value;
                // *** Start programmer edit section *** (Заявки.ДатаЗаявки Set end)

                // *** End programmer edit section *** (Заявки.ДатаЗаявки Set end)
            }
        }
        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.Количество CustomAttributes)

        // *** End programmer edit section *** (Заявки.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.Количество Get start)

                // *** End programmer edit section *** (Заявки.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (Заявки.Количество Get end)

                // *** End programmer edit section *** (Заявки.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.Количество Set start)

                // *** End programmer edit section *** (Заявки.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (Заявки.Количество Set end)

                // *** End programmer edit section *** (Заявки.Количество Set end)
            }
        }
        
        /// <summary>
        /// НаименДетали.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.НаименДетали CustomAttributes)

        // *** End programmer edit section *** (Заявки.НаименДетали CustomAttributes)
        [StrLen(255)]
        public virtual string НаименДетали
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.НаименДетали Get start)

                // *** End programmer edit section *** (Заявки.НаименДетали Get start)
                string result = this.fНаименДетали;
                // *** Start programmer edit section *** (Заявки.НаименДетали Get end)

                // *** End programmer edit section *** (Заявки.НаименДетали Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.НаименДетали Set start)

                // *** End programmer edit section *** (Заявки.НаименДетали Set start)
                this.fНаименДетали = value;
                // *** Start programmer edit section *** (Заявки.НаименДетали Set end)

                // *** End programmer edit section *** (Заявки.НаименДетали Set end)
            }
        }
        
        /// <summary>
        /// НомерЗаявки.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.НомерЗаявки CustomAttributes)

        // *** End programmer edit section *** (Заявки.НомерЗаявки CustomAttributes)
        public virtual int НомерЗаявки
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.НомерЗаявки Get start)

                // *** End programmer edit section *** (Заявки.НомерЗаявки Get start)
                int result = this.fНомерЗаявки;
                // *** Start programmer edit section *** (Заявки.НомерЗаявки Get end)

                // *** End programmer edit section *** (Заявки.НомерЗаявки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.НомерЗаявки Set start)

                // *** End programmer edit section *** (Заявки.НомерЗаявки Set start)
                this.fНомерЗаявки = value;
                // *** Start programmer edit section *** (Заявки.НомерЗаявки Set end)

                // *** End programmer edit section *** (Заявки.НомерЗаявки Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.Цена CustomAttributes)

        // *** End programmer edit section *** (Заявки.Цена CustomAttributes)
        public virtual float Цена
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.Цена Get start)

                // *** End programmer edit section *** (Заявки.Цена Get start)
                float result = this.fЦена;
                // *** Start programmer edit section *** (Заявки.Цена Get end)

                // *** End programmer edit section *** (Заявки.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.Цена Set start)

                // *** End programmer edit section *** (Заявки.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (Заявки.Цена Set end)

                // *** End programmer edit section *** (Заявки.Цена Set end)
            }
        }
        
        /// <summary>
        /// Заявки.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.Клиенты CustomAttributes)

        // *** End programmer edit section *** (Заявки.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Generaciya_novaya.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.Клиенты Get start)

                // *** End programmer edit section *** (Заявки.Клиенты Get start)
                IIS.Generaciya_novaya.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (Заявки.Клиенты Get end)

                // *** End programmer edit section *** (Заявки.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.Клиенты Set start)

                // *** End programmer edit section *** (Заявки.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (Заявки.Клиенты Set end)

                // *** End programmer edit section *** (Заявки.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Заявки.
        /// </summary>
        // *** Start programmer edit section *** (Заявки.Материалы CustomAttributes)

        // *** End programmer edit section *** (Заявки.Материалы CustomAttributes)
        [PropertyStorage(new string[] {
                "Материалы"})]
        [NotNull()]
        public virtual IIS.Generaciya_novaya.Материалы Материалы
        {
            get
            {
                // *** Start programmer edit section *** (Заявки.Материалы Get start)

                // *** End programmer edit section *** (Заявки.Материалы Get start)
                IIS.Generaciya_novaya.Материалы result = this.fМатериалы;
                // *** Start programmer edit section *** (Заявки.Материалы Get end)

                // *** End programmer edit section *** (Заявки.Материалы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Заявки.Материалы Set start)

                // *** End programmer edit section *** (Заявки.Материалы Set start)
                this.fМатериалы = value;
                // *** Start programmer edit section *** (Заявки.Материалы Set end)

                // *** End programmer edit section *** (Заявки.Материалы Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаявкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаявкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаявкиE", typeof(IIS.Generaciya_novaya.Заявки));
                }
            }
            
            /// <summary>
            /// "ЗаявкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаявкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаявкиL", typeof(IIS.Generaciya_novaya.Заявки));
                }
            }
        }
    }
}
