const ApplyQueryFilters = () => {
  const ApplyLimit = (query, limit) => {
    if (limit === null || !Number.isInteger(limit)){
      return query;
    }
    return query.limit(limit);
  };

  const ApplyStartAfter = (query, startAfter) => {
    if (startAfter === null){
      return query;
    }
    return query.startAfter(startAfter);
  };

  const ApplyOrderBy = (query, field, method) => {
    if (field === null){
      return query;
    }
    return query.orderBy(field, method);
  };

  const ApplyAndWhereFilters = (query, filters) => {
    if (filters === null || filters.length === 0){
      return query;
    }
    filters.forEach(filter => {
      query = query.where(filter.field, filter.operator, filter.value);
    });
    return query;
  };

  return {
    ApplyLimit,
    ApplyStartAfter,
    ApplyOrderBy,
    ApplyAndWhereFilters,
  };

};

export default ApplyQueryFilters;