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
    /// Материалы.
    /// </summary>
    // *** Start programmer edit section *** (Материалы CustomAttributes)

    // *** End programmer edit section *** (Материалы CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МатериалыE", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "Склады as \'Склады\'",
            "Склады.Наименование as \'Склад\'"}, Hidden=new string[] {
            "Склады.Наименование"})]
    [MasterViewDefineAttribute("МатериалыE", "Склады", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("МатериалыL", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "Склады.Наименование as \'Склад\'"})]
    public class Материалы : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fНаименование;
        
        private IIS.Generaciya_novaya.Склады fСклады;
        
        // *** Start programmer edit section *** (Материалы CustomMembers)

        // *** End programmer edit section *** (Материалы CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.ID CustomAttributes)

        // *** End programmer edit section *** (Материалы.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.ID Get start)

                // *** End programmer edit section *** (Материалы.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Материалы.ID Get end)

                // *** End programmer edit section *** (Материалы.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.ID Set start)

                // *** End programmer edit section *** (Материалы.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Материалы.ID Set end)

                // *** End programmer edit section *** (Материалы.ID Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.Наименование CustomAttributes)

        // *** End programmer edit section *** (Материалы.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.Наименование Get start)

                // *** End programmer edit section *** (Материалы.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Материалы.Наименование Get end)

                // *** End programmer edit section *** (Материалы.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.Наименование Set start)

                // *** End programmer edit section *** (Материалы.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Материалы.Наименование Set end)

                // *** End programmer edit section *** (Материалы.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Материалы.
        /// </summary>
        // *** Start programmer edit section *** (Материалы.Склады CustomAttributes)

        // *** End programmer edit section *** (Материалы.Склады CustomAttributes)
        [PropertyStorage(new string[] {
                "Склады"})]
        [NotNull()]
        public virtual IIS.Generaciya_novaya.Склады Склады
        {
            get
            {
                // *** Start programmer edit section *** (Материалы.Склады Get start)

                // *** End programmer edit section *** (Материалы.Склады Get start)
                IIS.Generaciya_novaya.Склады result = this.fСклады;
                // *** Start programmer edit section *** (Материалы.Склады Get end)

                // *** End programmer edit section *** (Материалы.Склады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материалы.Склады Set start)

                // *** End programmer edit section *** (Материалы.Склады Set start)
                this.fСклады = value;
                // *** Start programmer edit section *** (Материалы.Склады Set end)

                // *** End programmer edit section *** (Материалы.Склады Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МатериалыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалыE", typeof(IIS.Generaciya_novaya.Материалы));
                }
            }
            
            /// <summary>
            /// "МатериалыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалыL", typeof(IIS.Generaciya_novaya.Материалы));
                }
            }
        }
    }
}
