/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
  DataFrameAnalysisAnalyzedFields,
  DataFrameAnalysisContainer,
  DataFrameAnalyticsDestination,
  DataFrameAnalyticsSource
} from '@ml/_types/DataFrameAnalytics'
import { RequestBase } from '@_types/Base'
import { ByteSize, Id } from '@_types/common'
import { integer } from '@_types/Numeric'

/**
 * @rest_spec_name ml.preview_data_frame_analytics
 * @since 7.13.0
 * @stability TODO
 */
export interface Request extends RequestBase {
  path_parts?: {
    /** Identifier for the data frame analytics job. */
    id?: Id
  }
  body?: {
    /**
     * A data frame analytics config as described in Create data frame analytics jobs. Note that id and dest don’t need to be provided in the context of this API.
     * @doc_url https://www.elastic.co/guide/en/elasticsearch/reference/current/put-dfanalytics.html
     */
    config?: DataFramePreviewConfig
  }
}

export class DataFramePreviewConfig {
  source: DataFrameAnalyticsSource
  analysis: DataFrameAnalysisContainer
  model_memory_limit?: ByteSize
  max_num_threads?: integer
  analyzed_fields?: DataFrameAnalysisAnalyzedFields
}
