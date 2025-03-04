﻿using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Elsa.Persistence;
using Elsa.Persistence.Specifications;
using Elsa.Persistence.Specifications.WorkflowExecutionLogRecords;
using Microsoft.Extensions.Logging;
using Passingwind.Abp.ElsaModule.Common;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Linq;
using WorkflowExecutionLogRecordModel = Elsa.Models.WorkflowExecutionLogRecord;

namespace Passingwind.Abp.ElsaModule.Stores
{
    public class WorkflowExecutionLogStore : Store<WorkflowExecutionLogRecordModel, WorkflowExecutionLog, Guid>, IWorkflowExecutionLogStore
    {
        private readonly IStoreMapper _storeMapper;

        public WorkflowExecutionLogStore(ILoggerFactory loggerFactory, IRepository<WorkflowExecutionLog, Guid> repository, IAsyncQueryableExecuter asyncQueryableExecuter, IStoreMapper storeMapper) : base(loggerFactory, repository, asyncQueryableExecuter)
        {
            _storeMapper = storeMapper;
        }

        protected override Task<WorkflowExecutionLog> MapToEntityAsync(WorkflowExecutionLogRecordModel model)
        {
            return Task.FromResult(_storeMapper.MapToEntity(model));
        }

        protected override Task<WorkflowExecutionLog> MapToEntityAsync(WorkflowExecutionLogRecordModel model, WorkflowExecutionLog entity)
        {
            return Task.FromResult(_storeMapper.MapToEntity(model));
        }

        protected override Task<WorkflowExecutionLogRecordModel> MapToModelAsync(WorkflowExecutionLog entity)
        {
            return Task.FromResult(_storeMapper.MapToModel(entity));
        }

        protected override async Task<Expression<Func<WorkflowExecutionLog, bool>>> MapSpecificationAsync(ISpecification<WorkflowExecutionLogRecordModel> specification)
        {
            if (specification is ActivityIdSpecification activityIdSpecification)
            {
                return x => x.ActivityId == Guid.Parse(activityIdSpecification.ActivityId);
            }
            else if (specification is ActivityTypeSpecification activityTypeSpecification)
            {
                return x => x.ActivityType == activityTypeSpecification.ActivityType;
            }
            else if (specification is WorkflowInstanceIdSpecification workflowInstanceIdSpecification)
            {
                return x => x.WorkflowInstanceId == Guid.Parse(workflowInstanceIdSpecification.WorkflowInstanceId);
            }
            else
                return await base.MapSpecificationAsync(specification);
        }

        protected override Guid ConvertKey(string value)
        {
            return Guid.Parse(value);
        }
    }
}
