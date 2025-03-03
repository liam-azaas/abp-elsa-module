﻿using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;

namespace Passingwind.Abp.ElsaModule.Workflow
{
    public class ActivityConnectionDto : EntityDto
    {
        public Guid SourceId { get; set; }
        public Guid TargetId { get; set; }
        public string Outcome { get; set; }
        public Dictionary<string, object> Attributes { get; set; }
    }
}
