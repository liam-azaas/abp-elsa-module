﻿/**
 * Generate from swagger json url: https://localhost:44324/swagger/v1/swagger.json
 * Total count: 128
 **/
import * as Enum from "./enums";

declare namespace API {
    /**
     * *TODO*
     **/
    type ActionApiDescriptionModel = {
        uniqueName?: string | undefined;
        name?: string | undefined;
        httpMethod?: string | undefined;
        url?: string | undefined;
        supportedVersions?: string[] | undefined;
        parametersOnMethod?: MethodParameterApiDescriptionModel[] | undefined;
        parameters?: ParameterApiDescriptionModel[] | undefined;
        returnValue?: ReturnValueApiDescriptionModel | undefined;
        allowAnonymous?: boolean | undefined;
        implementFrom?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type Activity = {
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        lastModificationTime?: string | undefined;
        lastModifierId?: string | undefined;
        activityId?: string | undefined;
        type?: string | undefined;
        name?: string | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        persistWorkflow?: boolean | undefined;
        loadWorkflowContext?: boolean | undefined;
        saveWorkflowContext?: boolean | undefined;
        attributes?: any | undefined;
        properties?: ActivityDefinitionProperty[] | undefined;
        propertyStorageProviders?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityConnection = {
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        sourceId?: string | undefined;
        targetId?: string | undefined;
        outcome?: string | undefined;
        attributes?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityConnectionCreate = {
        sourceId?: string | undefined;
        targetId?: string | undefined;
        outcome?: string | undefined;
        attributes?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityCreateOrUpdate = {
        activityId?: string | undefined;
        type: string;
        name: string;
        displayName?: string | undefined;
        description?: string | undefined;
        persistWorkflow?: boolean | undefined;
        loadWorkflowContext?: boolean | undefined;
        saveWorkflowContext?: boolean | undefined;
        attributes?: any | undefined;
        properties?: ActivityDefinitionProperty[] | undefined;
        propertyStorageProviders?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityDefinitionProperty = {
        name?: string | undefined;
        syntax?: string | undefined;
        expressions?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityInputDescriptor = {
        name?: string | undefined;
        type?: Type | undefined;
        uiHint?: string | undefined;
        label?: string | undefined;
        hint?: string | undefined;
        options?: any | undefined;
        category?: string | undefined;
        order?: number | undefined;
        defaultValue?: any | undefined;
        defaultSyntax?: string | undefined;
        supportedSyntaxes?: string[] | undefined;
        isReadOnly?: boolean | undefined;
        isBrowsable?: boolean | undefined;
        isDesignerCritical?: boolean | undefined;
        defaultWorkflowStorageProvider?: string | undefined;
        disableWorkflowProviderSelection?: boolean | undefined;
        considerValuesAsOutcomes?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityOutputDescriptor = {
        name?: string | undefined;
        type?: Type | undefined;
        hint?: string | undefined;
        defaultWorkflowStorageProvider?: string | undefined;
        disableWorkflowProviderSelection?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityScope = {
        activityId?: string | undefined;
        variables?: Variables | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityTypeDescriptor = {
        type?: string | undefined;
        displayName?: string | undefined;
        description?: string | undefined;
        category?: string | undefined;
        traits?: Enum.ActivityTraits | undefined;
        outcomes?: string[] | undefined;
        inputProperties?: ActivityInputDescriptor[] | undefined;
        outputProperties?: ActivityOutputDescriptor[] | undefined;
        customAttributes?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ActivityTypeDescriptorListResult = {
        items?: ActivityTypeDescriptor[] | undefined;
        categories?: string[] | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationApiDescriptionModel = {
        modules?: Record<any, ModuleApiDescriptionModel> | undefined;
        types?: Record<any, TypeApiDescriptionModel> | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationAuthConfiguration = {
        policies?: any | undefined;
        grantedPolicies?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationConfiguration = {
        localization?: ApplicationLocalizationConfiguration | undefined;
        auth?: ApplicationAuthConfiguration | undefined;
        setting?: ApplicationSettingConfiguration | undefined;
        currentUser?: CurrentUser | undefined;
        features?: ApplicationFeatureConfiguration | undefined;
        globalFeatures?: ApplicationGlobalFeatureConfiguration | undefined;
        multiTenancy?: MultiTenancyInfo | undefined;
        currentTenant?: CurrentTenant | undefined;
        timing?: Timing | undefined;
        clock?: Clock | undefined;
        objectExtensions?: ObjectExtensions | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationFeatureConfiguration = {
        values?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationGlobalFeatureConfiguration = {
        enabledFeatures?: string[] | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationLocalizationConfiguration = {
        values?: any | undefined;
        languages?: LanguageInfo[] | undefined;
        currentCulture?: CurrentCulture | undefined;
        defaultResourceName?: string | undefined;
        languagesMap?: any | undefined;
        languageFilesMap?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ApplicationSettingConfiguration = {
        values?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type Assembly = {
        definedTypes?: TypeInfo[] | undefined;
        exportedTypes?: Type[] | undefined;
        codeBase?: string | undefined;
        entryPoint?: MethodInfo | undefined;
        fullName?: string | undefined;
        imageRuntimeVersion?: string | undefined;
        isDynamic?: boolean | undefined;
        location?: string | undefined;
        reflectionOnly?: boolean | undefined;
        isCollectible?: boolean | undefined;
        isFullyTrusted?: boolean | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        escapedCodeBase?: string | undefined;
        manifestModule?: Module | undefined;
        modules?: Module[] | undefined;
        globalAssemblyCache?: boolean | undefined;
        hostContext?: number | undefined;
        securityRuleSet?: Enum.SecurityRuleSet | undefined;
    };

    /**
     * *TODO*
     **/
    type BlockingActivity = {
        activityId?: string | undefined;
        activityType?: string | undefined;
        tag?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type Clock = {
        kind?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type ConstructorInfo = {
        name?: string | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        attributes?: Enum.MethodAttributes | undefined;
        methodImplementationFlags?: Enum.MethodImplAttributes | undefined;
        callingConvention?: Enum.CallingConventions | undefined;
        isAbstract?: boolean | undefined;
        isConstructor?: boolean | undefined;
        isFinal?: boolean | undefined;
        isHideBySig?: boolean | undefined;
        isSpecialName?: boolean | undefined;
        isStatic?: boolean | undefined;
        isVirtual?: boolean | undefined;
        isAssembly?: boolean | undefined;
        isFamily?: boolean | undefined;
        isFamilyAndAssembly?: boolean | undefined;
        isFamilyOrAssembly?: boolean | undefined;
        isPrivate?: boolean | undefined;
        isPublic?: boolean | undefined;
        isConstructedGenericMethod?: boolean | undefined;
        isGenericMethod?: boolean | undefined;
        isGenericMethodDefinition?: boolean | undefined;
        containsGenericParameters?: boolean | undefined;
        methodHandle?: RuntimeMethodHandle | undefined;
        isSecurityCritical?: boolean | undefined;
        isSecuritySafeCritical?: boolean | undefined;
        isSecurityTransparent?: boolean | undefined;
        memberType?: Enum.MemberTypes | undefined;
    };

    /**
     * *TODO*
     **/
    type ControllerApiDescriptionModel = {
        controllerName?: string | undefined;
        controllerGroupName?: string | undefined;
        isRemoteService?: boolean | undefined;
        apiVersion?: string | undefined;
        type?: string | undefined;
        interfaces?: ControllerInterfaceApiDescriptionModel[] | undefined;
        actions?: Record<any, ActionApiDescriptionModel> | undefined;
    };

    /**
     * *TODO*
     **/
    type ControllerInterfaceApiDescriptionModel = {
        type?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type CurrentCulture = {
        displayName?: string | undefined;
        englishName?: string | undefined;
        threeLetterIsoLanguageName?: string | undefined;
        twoLetterIsoLanguageName?: string | undefined;
        isRightToLeft?: boolean | undefined;
        cultureName?: string | undefined;
        name?: string | undefined;
        nativeName?: string | undefined;
        dateTimeFormat?: DateTimeFormat | undefined;
    };

    /**
     * *TODO*
     **/
    type CurrentTenant = {
        id?: string | undefined;
        name?: string | undefined;
        isAvailable?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type CurrentUser = {
        isAuthenticated?: boolean | undefined;
        id?: string | undefined;
        tenantId?: string | undefined;
        impersonatorUserId?: string | undefined;
        impersonatorTenantId?: string | undefined;
        impersonatorUserName?: string | undefined;
        impersonatorTenantName?: string | undefined;
        userName?: string | undefined;
        name?: string | undefined;
        surName?: string | undefined;
        email?: string | undefined;
        emailVerified?: boolean | undefined;
        phoneNumber?: string | undefined;
        phoneNumberVerified?: boolean | undefined;
        roles?: string[] | undefined;
    };

    /**
     * *TODO*
     **/
    type CustomAttributeData = {
        attributeType?: Type | undefined;
        constructor?: ConstructorInfo | undefined;
        constructorArguments?: CustomAttributeTypedArgument[] | undefined;
        namedArguments?: CustomAttributeNamedArgument[] | undefined;
    };

    /**
     * *TODO*
     **/
    type CustomAttributeNamedArgument = {
        memberInfo?: MemberInfo | undefined;
        typedValue?: CustomAttributeTypedArgument | undefined;
        memberName?: string | undefined;
        isField?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type CustomAttributeTypedArgument = {
        argumentType?: Type | undefined;
        value?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type DateTimeFormat = {
        calendarAlgorithmType?: string | undefined;
        dateTimeFormatLong?: string | undefined;
        shortDatePattern?: string | undefined;
        fullDateTimePattern?: string | undefined;
        dateSeparator?: string | undefined;
        shortTimePattern?: string | undefined;
        longTimePattern?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type EntityExtension = {
        properties?: Record<any, ExtensionProperty> | undefined;
        configuration?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type EventInfo = {
        name?: string | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        memberType?: Enum.MemberTypes | undefined;
        attributes?: Enum.EventAttributes | undefined;
        isSpecialName?: boolean | undefined;
        addMethod?: MethodInfo | undefined;
        removeMethod?: MethodInfo | undefined;
        raiseMethod?: MethodInfo | undefined;
        isMulticast?: boolean | undefined;
        eventHandlerType?: Type | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionEnum = {
        fields?: ExtensionEnumField[] | undefined;
        localizationResource?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionEnumField = {
        name?: string | undefined;
        value?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionProperty = {
        type?: string | undefined;
        typeSimple?: string | undefined;
        displayName?: LocalizableString | undefined;
        api?: ExtensionPropertyApi | undefined;
        ui?: ExtensionPropertyUi | undefined;
        attributes?: ExtensionPropertyAttribute[] | undefined;
        configuration?: any | undefined;
        defaultValue?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyApi = {
        onGet?: ExtensionPropertyApiGet | undefined;
        onCreate?: ExtensionPropertyApiCreate | undefined;
        onUpdate?: ExtensionPropertyApiUpdate | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyApiCreate = {
        isAvailable?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyApiGet = {
        isAvailable?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyApiUpdate = {
        isAvailable?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyAttribute = {
        typeSimple?: string | undefined;
        config?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyUi = {
        onTable?: ExtensionPropertyUiTable | undefined;
        onCreateForm?: ExtensionPropertyUiForm | undefined;
        onEditForm?: ExtensionPropertyUiForm | undefined;
        lookup?: ExtensionPropertyUiLookup | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyUiForm = {
        isVisible?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyUiLookup = {
        url?: string | undefined;
        resultListPropertyName?: string | undefined;
        displayPropertyName?: string | undefined;
        valuePropertyName?: string | undefined;
        filterParamName?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type ExtensionPropertyUiTable = {
        isVisible?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type FieldInfo = {
        name?: string | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        memberType?: Enum.MemberTypes | undefined;
        attributes?: Enum.FieldAttributes | undefined;
        fieldType?: Type | undefined;
        isInitOnly?: boolean | undefined;
        isLiteral?: boolean | undefined;
        isNotSerialized?: boolean | undefined;
        isPinvokeImpl?: boolean | undefined;
        isSpecialName?: boolean | undefined;
        isStatic?: boolean | undefined;
        isAssembly?: boolean | undefined;
        isFamily?: boolean | undefined;
        isFamilyAndAssembly?: boolean | undefined;
        isFamilyOrAssembly?: boolean | undefined;
        isPrivate?: boolean | undefined;
        isPublic?: boolean | undefined;
        isSecurityCritical?: boolean | undefined;
        isSecuritySafeCritical?: boolean | undefined;
        isSecurityTransparent?: boolean | undefined;
        fieldHandle?: RuntimeFieldHandle | undefined;
    };

    /**
     * *TODO*
     **/
    type FindTenantResult = {
        success?: boolean | undefined;
        tenantId?: string | undefined;
        name?: string | undefined;
        isActive?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type ICustomAttributeProvider = {
    };

    /**
     * *TODO*
     **/
    type IanaTimeZone = {
        timeZoneName?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type IntPtr = {
    };

    /**
     * *TODO*
     **/
    type JToken = {
    };

    /**
     * *TODO*
     **/
    type LanguageInfo = {
        cultureName?: string | undefined;
        uiCultureName?: string | undefined;
        displayName?: string | undefined;
        flagIcon?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type LocalizableString = {
        name?: string | undefined;
        resource?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type MemberInfo = {
        memberType?: Enum.MemberTypes | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        name?: string | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type MethodBase = {
        memberType?: Enum.MemberTypes | undefined;
        name?: string | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        attributes?: Enum.MethodAttributes | undefined;
        methodImplementationFlags?: Enum.MethodImplAttributes | undefined;
        callingConvention?: Enum.CallingConventions | undefined;
        isAbstract?: boolean | undefined;
        isConstructor?: boolean | undefined;
        isFinal?: boolean | undefined;
        isHideBySig?: boolean | undefined;
        isSpecialName?: boolean | undefined;
        isStatic?: boolean | undefined;
        isVirtual?: boolean | undefined;
        isAssembly?: boolean | undefined;
        isFamily?: boolean | undefined;
        isFamilyAndAssembly?: boolean | undefined;
        isFamilyOrAssembly?: boolean | undefined;
        isPrivate?: boolean | undefined;
        isPublic?: boolean | undefined;
        isConstructedGenericMethod?: boolean | undefined;
        isGenericMethod?: boolean | undefined;
        isGenericMethodDefinition?: boolean | undefined;
        containsGenericParameters?: boolean | undefined;
        methodHandle?: RuntimeMethodHandle | undefined;
        isSecurityCritical?: boolean | undefined;
        isSecuritySafeCritical?: boolean | undefined;
        isSecurityTransparent?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type MethodInfo = {
        name?: string | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        attributes?: Enum.MethodAttributes | undefined;
        methodImplementationFlags?: Enum.MethodImplAttributes | undefined;
        callingConvention?: Enum.CallingConventions | undefined;
        isAbstract?: boolean | undefined;
        isConstructor?: boolean | undefined;
        isFinal?: boolean | undefined;
        isHideBySig?: boolean | undefined;
        isSpecialName?: boolean | undefined;
        isStatic?: boolean | undefined;
        isVirtual?: boolean | undefined;
        isAssembly?: boolean | undefined;
        isFamily?: boolean | undefined;
        isFamilyAndAssembly?: boolean | undefined;
        isFamilyOrAssembly?: boolean | undefined;
        isPrivate?: boolean | undefined;
        isPublic?: boolean | undefined;
        isConstructedGenericMethod?: boolean | undefined;
        isGenericMethod?: boolean | undefined;
        isGenericMethodDefinition?: boolean | undefined;
        containsGenericParameters?: boolean | undefined;
        methodHandle?: RuntimeMethodHandle | undefined;
        isSecurityCritical?: boolean | undefined;
        isSecuritySafeCritical?: boolean | undefined;
        isSecurityTransparent?: boolean | undefined;
        memberType?: Enum.MemberTypes | undefined;
        returnParameter?: ParameterInfo | undefined;
        returnType?: Type | undefined;
        returnTypeCustomAttributes?: ICustomAttributeProvider | undefined;
    };

    /**
     * *TODO*
     **/
    type MethodParameterApiDescriptionModel = {
        name?: string | undefined;
        typeAsString?: string | undefined;
        type?: string | undefined;
        typeSimple?: string | undefined;
        isOptional?: boolean | undefined;
        defaultValue?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type Module = {
        assembly?: Assembly | undefined;
        fullyQualifiedName?: string | undefined;
        name?: string | undefined;
        mdStreamVersion?: number | undefined;
        moduleVersionId?: string | undefined;
        scopeName?: string | undefined;
        moduleHandle?: ModuleHandle | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        metadataToken?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type ModuleApiDescriptionModel = {
        rootPath?: string | undefined;
        remoteServiceName?: string | undefined;
        controllers?: Record<any, ControllerApiDescriptionModel> | undefined;
    };

    /**
     * *TODO*
     **/
    type ModuleExtension = {
        entities?: Record<any, EntityExtension> | undefined;
        configuration?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type ModuleHandle = {
        mdStreamVersion?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type MultiTenancyInfo = {
        isEnabled?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type NameValue = {
        name?: string | undefined;
        value?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type ObjectExtensions = {
        modules?: Record<any, ModuleExtension> | undefined;
        enums?: Record<any, ExtensionEnum> | undefined;
    };

    /**
     * *TODO*
     **/
    type ParameterApiDescriptionModel = {
        nameOnMethod?: string | undefined;
        name?: string | undefined;
        jsonName?: string | undefined;
        type?: string | undefined;
        typeSimple?: string | undefined;
        isOptional?: boolean | undefined;
        defaultValue?: any | undefined;
        constraintTypes?: string[] | undefined;
        bindingSourceId?: string | undefined;
        descriptorName?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type ParameterInfo = {
        attributes?: Enum.ParameterAttributes | undefined;
        member?: MemberInfo | undefined;
        name?: string | undefined;
        parameterType?: Type | undefined;
        position?: number | undefined;
        isIn?: boolean | undefined;
        isLcid?: boolean | undefined;
        isOptional?: boolean | undefined;
        isOut?: boolean | undefined;
        isRetval?: boolean | undefined;
        defaultValue?: any | undefined;
        rawDefaultValue?: any | undefined;
        hasDefaultValue?: boolean | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        metadataToken?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type PropertyApiDescriptionModel = {
        name?: string | undefined;
        jsonName?: string | undefined;
        type?: string | undefined;
        typeSimple?: string | undefined;
        isRequired?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type PropertyInfo = {
        name?: string | undefined;
        declaringType?: Type | undefined;
        reflectedType?: Type | undefined;
        module?: Module | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        memberType?: Enum.MemberTypes | undefined;
        propertyType?: Type | undefined;
        attributes?: Enum.PropertyAttributes | undefined;
        isSpecialName?: boolean | undefined;
        canRead?: boolean | undefined;
        canWrite?: boolean | undefined;
        getMethod?: MethodInfo | undefined;
        setMethod?: MethodInfo | undefined;
    };

    /**
     * *TODO*
     **/
    type RemoteServiceErrorInfo = {
        code?: string | undefined;
        message?: string | undefined;
        details?: string | undefined;
        data?: any | undefined;
        validationErrors?: RemoteServiceValidationErrorInfo[] | undefined;
    };

    /**
     * *TODO*
     **/
    type RemoteServiceErrorResponse = {
        error?: RemoteServiceErrorInfo | undefined;
    };

    /**
     * *TODO*
     **/
    type RemoteServiceValidationErrorInfo = {
        message?: string | undefined;
        members?: string[] | undefined;
    };

    /**
     * *TODO*
     **/
    type ReturnValueApiDescriptionModel = {
        type?: string | undefined;
        typeSimple?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type RuntimeFieldHandle = {
        value?: IntPtr | undefined;
    };

    /**
     * *TODO*
     **/
    type RuntimeMethodHandle = {
        value?: IntPtr | undefined;
    };

    /**
     * *TODO*
     **/
    type RuntimeTypeHandle = {
        value?: IntPtr | undefined;
    };

    /**
     * *TODO*
     **/
    type ScheduledActivity = {
        activityId?: string | undefined;
        input?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type SimpleException = {
        type?: Type | undefined;
        message?: string | undefined;
        stackTrace?: string | undefined;
        innerException?: SimpleException | undefined;
        data?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type StructLayoutAttribute = {
        typeId?: any | undefined;
        value?: Enum.LayoutKind | undefined;
    };

    /**
     * *TODO*
     **/
    type TimeZone = {
        iana?: IanaTimeZone | undefined;
        windows?: WindowsTimeZone | undefined;
    };

    /**
     * *TODO*
     **/
    type Timing = {
        timeZone?: TimeZone | undefined;
    };

    /**
     * *TODO*
     **/
    type Type = {
        name?: string | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        isInterface?: boolean | undefined;
        memberType?: Enum.MemberTypes | undefined;
        namespace?: string | undefined;
        assemblyQualifiedName?: string | undefined;
        fullName?: string | undefined;
        assembly?: Assembly | undefined;
        module?: Module | undefined;
        isNested?: boolean | undefined;
        declaringType?: Type | undefined;
        declaringMethod?: MethodBase | undefined;
        reflectedType?: Type | undefined;
        underlyingSystemType?: Type | undefined;
        isTypeDefinition?: boolean | undefined;
        isArray?: boolean | undefined;
        isByRef?: boolean | undefined;
        isPointer?: boolean | undefined;
        isConstructedGenericType?: boolean | undefined;
        isGenericParameter?: boolean | undefined;
        isGenericTypeParameter?: boolean | undefined;
        isGenericMethodParameter?: boolean | undefined;
        isGenericType?: boolean | undefined;
        isGenericTypeDefinition?: boolean | undefined;
        isSZArray?: boolean | undefined;
        isVariableBoundArray?: boolean | undefined;
        isByRefLike?: boolean | undefined;
        hasElementType?: boolean | undefined;
        genericTypeArguments?: Type[] | undefined;
        genericParameterPosition?: number | undefined;
        genericParameterAttributes?: Enum.GenericParameterAttributes | undefined;
        attributes?: Enum.TypeAttributes | undefined;
        isAbstract?: boolean | undefined;
        isImport?: boolean | undefined;
        isSealed?: boolean | undefined;
        isSpecialName?: boolean | undefined;
        isClass?: boolean | undefined;
        isNestedAssembly?: boolean | undefined;
        isNestedFamANDAssem?: boolean | undefined;
        isNestedFamily?: boolean | undefined;
        isNestedFamORAssem?: boolean | undefined;
        isNestedPrivate?: boolean | undefined;
        isNestedPublic?: boolean | undefined;
        isNotPublic?: boolean | undefined;
        isPublic?: boolean | undefined;
        isAutoLayout?: boolean | undefined;
        isExplicitLayout?: boolean | undefined;
        isLayoutSequential?: boolean | undefined;
        isAnsiClass?: boolean | undefined;
        isAutoClass?: boolean | undefined;
        isUnicodeClass?: boolean | undefined;
        isCOMObject?: boolean | undefined;
        isContextful?: boolean | undefined;
        isEnum?: boolean | undefined;
        isMarshalByRef?: boolean | undefined;
        isPrimitive?: boolean | undefined;
        isValueType?: boolean | undefined;
        isSignatureType?: boolean | undefined;
        isSecurityCritical?: boolean | undefined;
        isSecuritySafeCritical?: boolean | undefined;
        isSecurityTransparent?: boolean | undefined;
        structLayoutAttribute?: StructLayoutAttribute | undefined;
        typeInitializer?: ConstructorInfo | undefined;
        typeHandle?: RuntimeTypeHandle | undefined;
        guid?: string | undefined;
        baseType?: Type | undefined;
        isSerializable?: boolean | undefined;
        containsGenericParameters?: boolean | undefined;
        isVisible?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type TypeApiDescriptionModel = {
        baseType?: string | undefined;
        isEnum?: boolean | undefined;
        enumNames?: string[] | undefined;
        enumValues?: [] | undefined;
        genericArguments?: string[] | undefined;
        properties?: PropertyApiDescriptionModel[] | undefined;
    };

    /**
     * *TODO*
     **/
    type TypeInfo = {
        name?: string | undefined;
        customAttributes?: CustomAttributeData[] | undefined;
        isCollectible?: boolean | undefined;
        metadataToken?: number | undefined;
        isInterface?: boolean | undefined;
        memberType?: Enum.MemberTypes | undefined;
        namespace?: string | undefined;
        assemblyQualifiedName?: string | undefined;
        fullName?: string | undefined;
        assembly?: Assembly | undefined;
        module?: Module | undefined;
        isNested?: boolean | undefined;
        declaringType?: Type | undefined;
        declaringMethod?: MethodBase | undefined;
        reflectedType?: Type | undefined;
        underlyingSystemType?: Type | undefined;
        isTypeDefinition?: boolean | undefined;
        isArray?: boolean | undefined;
        isByRef?: boolean | undefined;
        isPointer?: boolean | undefined;
        isConstructedGenericType?: boolean | undefined;
        isGenericParameter?: boolean | undefined;
        isGenericTypeParameter?: boolean | undefined;
        isGenericMethodParameter?: boolean | undefined;
        isGenericType?: boolean | undefined;
        isGenericTypeDefinition?: boolean | undefined;
        isSZArray?: boolean | undefined;
        isVariableBoundArray?: boolean | undefined;
        isByRefLike?: boolean | undefined;
        hasElementType?: boolean | undefined;
        genericTypeArguments?: Type[] | undefined;
        genericParameterPosition?: number | undefined;
        genericParameterAttributes?: Enum.GenericParameterAttributes | undefined;
        attributes?: Enum.TypeAttributes | undefined;
        isAbstract?: boolean | undefined;
        isImport?: boolean | undefined;
        isSealed?: boolean | undefined;
        isSpecialName?: boolean | undefined;
        isClass?: boolean | undefined;
        isNestedAssembly?: boolean | undefined;
        isNestedFamANDAssem?: boolean | undefined;
        isNestedFamily?: boolean | undefined;
        isNestedFamORAssem?: boolean | undefined;
        isNestedPrivate?: boolean | undefined;
        isNestedPublic?: boolean | undefined;
        isNotPublic?: boolean | undefined;
        isPublic?: boolean | undefined;
        isAutoLayout?: boolean | undefined;
        isExplicitLayout?: boolean | undefined;
        isLayoutSequential?: boolean | undefined;
        isAnsiClass?: boolean | undefined;
        isAutoClass?: boolean | undefined;
        isUnicodeClass?: boolean | undefined;
        isCOMObject?: boolean | undefined;
        isContextful?: boolean | undefined;
        isEnum?: boolean | undefined;
        isMarshalByRef?: boolean | undefined;
        isPrimitive?: boolean | undefined;
        isValueType?: boolean | undefined;
        isSignatureType?: boolean | undefined;
        isSecurityCritical?: boolean | undefined;
        isSecuritySafeCritical?: boolean | undefined;
        isSecurityTransparent?: boolean | undefined;
        structLayoutAttribute?: StructLayoutAttribute | undefined;
        typeInitializer?: ConstructorInfo | undefined;
        typeHandle?: RuntimeTypeHandle | undefined;
        guid?: string | undefined;
        baseType?: Type | undefined;
        isSerializable?: boolean | undefined;
        containsGenericParameters?: boolean | undefined;
        isVisible?: boolean | undefined;
        genericTypeParameters?: Type[] | undefined;
        declaredConstructors?: ConstructorInfo[] | undefined;
        declaredEvents?: EventInfo[] | undefined;
        declaredFields?: FieldInfo[] | undefined;
        declaredMembers?: MemberInfo[] | undefined;
        declaredMethods?: MethodInfo[] | undefined;
        declaredNestedTypes?: TypeInfo[] | undefined;
        declaredProperties?: PropertyInfo[] | undefined;
        implementedInterfaces?: Type[] | undefined;
    };

    /**
     * *TODO*
     **/
    type Variables = {
        data?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionPagedResult = {
        items?: WorkflowDefinition[] | undefined;
        totalCount?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionVersionListItemPagedResult = {
        items?: WorkflowDefinitionVersionListItem[] | undefined;
        totalCount?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowExecutionLogListResult = {
        items?: WorkflowExecutionLog[] | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowExecutionLogPagedResult = {
        items?: WorkflowExecutionLog[] | undefined;
        totalCount?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstanceBasicPagedResult = {
        items?: WorkflowInstanceBasic[] | undefined;
        totalCount?: number | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowStorageProviderInfoListResult = {
        items?: WorkflowStorageProviderInfo[] | undefined;
    };

    /**
     * *TODO*
     **/
    type WindowsTimeZone = {
        timeZoneId?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowContextOptions = {
        contextType?: Type | undefined;
        contextFidelity?: Enum.WorkflowContextFidelity | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinition = {
        id?: string | undefined;
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        lastModificationTime?: string | undefined;
        lastModifierId?: string | undefined;
        name?: string | undefined;
        displayName?: string | undefined;
        tenantId?: string | undefined;
        description?: string | undefined;
        latestVersion?: number | undefined;
        publishedVersion?: number | undefined;
        isSingleton?: boolean | undefined;
        deleteCompletedInstances?: boolean | undefined;
        channel?: string | undefined;
        tag?: string | undefined;
        persistenceBehavior?: Enum.WorkflowPersistenceBehavior | undefined;
        contextOptions?: WorkflowContextOptions | undefined;
        variables?: any | undefined;
        customAttributes?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionCreateOrUpdate = {
        name: string;
        displayName?: string | undefined;
        description?: string | undefined;
        isSingleton?: boolean | undefined;
        deleteCompletedInstances?: boolean | undefined;
        channel?: string | undefined;
        tag?: string | undefined;
        persistenceBehavior?: Enum.WorkflowPersistenceBehavior | undefined;
        contextOptions?: WorkflowContextOptions | undefined;
        variables?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionDispatchRequest = {
        activityId?: string | undefined;
        correlationId?: string | undefined;
        contextId?: string | undefined;
        input?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionDispatchResult = {
        workflowInstanceId?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionExecuteRequest = {
        activityId?: string | undefined;
        correlationId?: string | undefined;
        contextId?: string | undefined;
        input?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionVersion = {
        id?: string | undefined;
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        lastModificationTime?: string | undefined;
        lastModifierId?: string | undefined;
        definition?: WorkflowDefinition | undefined;
        version?: number | undefined;
        isLatest?: boolean | undefined;
        isPublished?: boolean | undefined;
        activities?: Activity[] | undefined;
        connections?: ActivityConnection[] | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionVersionCreateOrUpdate = {
        definition: WorkflowDefinitionCreateOrUpdate;
        activities?: ActivityCreateOrUpdate[] | undefined;
        connections?: ActivityConnectionCreate[] | undefined;
        isPublished?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowDefinitionVersionListItem = {
        id?: string | undefined;
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        lastModificationTime?: string | undefined;
        lastModifierId?: string | undefined;
        version?: number | undefined;
        isLatest?: boolean | undefined;
        isPublished?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowExecutionLog = {
        id?: string | undefined;
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        workflowInstanceId?: string | undefined;
        activityId?: string | undefined;
        activityType?: string | undefined;
        timestamp?: string | undefined;
        eventName?: string | undefined;
        message?: string | undefined;
        source?: string | undefined;
        data?: Record<any, JToken> | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowFault = {
        exception?: SimpleException | undefined;
        message?: string | undefined;
        faultedActivityId?: string | undefined;
        activityInput?: any | undefined;
        resuming?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInput = {
        input?: any | undefined;
        storageProviderName?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInputReference = {
        providerName?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstance = {
        id?: string | undefined;
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        lastModificationTime?: string | undefined;
        lastModifierId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        workflowDefinitionVersionId?: string | undefined;
        name?: string | undefined;
        version?: number | undefined;
        workflowStatus?: number | undefined;
        correlationId?: string | undefined;
        contextType?: string | undefined;
        contextId?: string | undefined;
        lastExecutedTime?: string | undefined;
        finishedTime?: string | undefined;
        cancelledTime?: string | undefined;
        faultedTime?: string | undefined;
        variables?: any | undefined;
        input?: WorkflowInputReference | undefined;
        output?: WorkflowOutputReference | undefined;
        fault?: WorkflowFault | undefined;
        scheduledActivities?: ScheduledActivity[] | undefined;
        blockingActivities?: BlockingActivity[] | undefined;
        scopes?: ActivityScope[] | undefined;
        currentActivity?: ScheduledActivity | undefined;
        lastExecutedActivityId?: string | undefined;
        activityData?: any | undefined;
        metadata?: any | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstanceBasic = {
        id?: string | undefined;
        creationTime?: string | undefined;
        creatorId?: string | undefined;
        lastModificationTime?: string | undefined;
        lastModifierId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        workflowDefinitionVersionId?: string | undefined;
        name?: string | undefined;
        version?: number | undefined;
        workflowStatus?: number | undefined;
        correlationId?: string | undefined;
        contextType?: string | undefined;
        contextId?: string | undefined;
        lastExecutedTime?: string | undefined;
        finishedTime?: string | undefined;
        cancelledTime?: string | undefined;
        faultedTime?: string | undefined;
        fault?: WorkflowFault | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstanceDispatchRequest = {
        activityId?: string | undefined;
        input?: WorkflowInput | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstanceExecuteRequest = {
        activityId?: string | undefined;
        input?: WorkflowInput | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstanceRetryRequest = {
        runImmediately?: boolean | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowInstancesBatchDeleteRequest = {
        ids?: string[] | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowOutputReference = {
        providerName?: string | undefined;
        activityId?: string | undefined;
    };

    /**
     * *TODO*
     **/
    type WorkflowStorageProviderInfo = {
        name?: string | undefined;
        displayName?: string | undefined;
    };


}
