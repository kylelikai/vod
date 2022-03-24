#!/usr/bin/env python

import json
import os
import boto3
from urllib.parse import urlparse
import logging

from botocore.client import ClientError


logger = logging.getLogger()
logger.setLevel(logging.INFO)


region_name = os.environ['AWS_DEFAULT_REGION']

dydb = boto3.resource('dynamodb',region_name=region_name)
dy_table = dydb.Table('vod_cloudfront_userid_key')


def handler(event, context):
    logger.info('dump envent: %s',json.dumps(event))
    logger.info(os.environ)

    cf_key = event
    cf_value = event 
    
    search_key = {'cf_key': cf_key}

    try:
        res_data = db_table.get_item(Key=search_key)
        if 'Item' not in res_data.keys():
            statusCode = 500
            return None

        if cf_key != es_data['Item']['cf_key']:
            statusCode = 500
            return None

        if cf_value != es_data['Item']['cf_value']:
            statusCode = 500
            return None

        statusCode = 200

    except Exception as e:
        logger.error('Exception: %s', e)
        statusCode = 500
        raise

    finally:
        return {
            'statusCode': statusCode,
            'body': json.dumps(job, indent=4, sort_keys=True, default=str),
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
            }
