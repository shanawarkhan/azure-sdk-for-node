//
// Copyright (c) Microsoft and contributors.  All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//
// See the License for the specific language governing permissions and
// limitations under the License.
//

module.exports = function(grunt) {
  //init stuff
  grunt.initConfig({
    downloadNuGet: {
      path : '.nuget',
      src : 'http://www.nuget.org/nuget.exe'
    },
    packageVersions: {
      'azure': '0.10.1',
      'azure-common': '0.9.9',
      'azure-gallery': '2.0.0-pre.11',
      'azure-mgmt': '0.9.12',
      'azure-mgmt-compute': '0.9.12',
      'azure-mgmt-hdinsight': '0.9.12',
      'azure-mgmt-resource': '2.0.0-pre.12',
      'azure-mgmt-sb': '0.9.12',
      'azure-mgmt-scheduler': '0.9.1-pre.12',
      'azure-mgmt-sql': '0.9.13',
      'azure-mgmt-storage': '0.9.12',
      'azure-mgmt-store': '0.9.12',
      'azure-mgmt-subscription': '0.9.12',
      'azure-mgmt-vnet': '0.9.13',
      'azure-mgmt-website': '0.9.12',
      'azure-monitoring': '0.9.1-pre.12',
      'azure-rm-website': '0.9.0-pre.6',
      'azure-sb': '0.9.14',
      'azure-scheduler': '0.9.1-pre.12',
      'azure-storage-legacy': '0.9.12',
      'azure-mgmt-authorization': '0.9.0-pre.2',
      'azure-extra': '0.1.3'
    },
    hydra: {
      'Microsoft.WindowsAzure.Management.Compute.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.Compute.ComputeManagementClient',
        destDir: 'lib/services/computeManagement/lib',
        output: 'ComputeManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.ManagementClient',
        destDir: 'lib/services/management/lib',
        output: 'ManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.Monitoring.Specification.dll' : [
        {
          clientType: 'Microsoft.WindowsAzure.Management.Monitoring.Alerts.AlertsClient',
          destDir: 'lib/services/monitoring/lib',
          output: 'alertsClient.js'
        },
        {
          clientType: 'Microsoft.WindowsAzure.Management.Monitoring.Autoscale.AutoscaleClient',
          destDir: 'lib/services/monitoring/lib',
          output: 'autoscaleClient.js'
        },
        {
          clientType: 'Microsoft.WindowsAzure.Management.Monitoring.Metrics.MetricsClient',
          destDir: 'lib/services/monitoring/lib',
          output: 'metricsClient.js'
        },
        {
          clientType: 'Microsoft.WindowsAzure.Management.Monitoring.Events.EventsClient',
          destDir: 'lib/services/monitoring/lib',
          output: 'eventsClient.js'
        }
      ],
      'Microsoft.WindowsAzure.Management.Network.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.Network.NetworkManagementClient',
        destDir: 'lib/services/networkManagement/lib',
        output: 'networkManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.Scheduler.Specification.dll' : [
        {
          clientType: 'Microsoft.WindowsAzure.Management.Scheduler.SchedulerManagementClient',
          destDir: 'lib/services/schedulerManagement/lib',
          output: 'schedulerManagementClient.js'
        },
        {
          clientType: 'Microsoft.WindowsAzure.Scheduler.SchedulerClient',
          destDir: 'lib/services/scheduler/lib',
          output: 'schedulerClient.js'
        }
      ],
      'Microsoft.WindowsAzure.Management.ServiceBus.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.ServiceBus.ServiceBusManagementClient',
        destDir: 'lib/services/serviceBusManagement/lib',
        output: 'serviceBusManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.Sql.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.Sql.SqlManagementClient',
        destDir: 'lib/services/sqlManagement/lib',
        output: 'sqlManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.Storage.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.Storage.StorageManagementClient',
        destDir: 'lib/services/storageManagement/lib',
        output: 'storageManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.Store.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.Store.StoreManagementClient',
        destDir: 'lib/services/storeManagement/lib',
        output: 'storeManagementClient.js'
      },
      'Microsoft.WindowsAzure.Management.WebSites.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.Management.WebSites.WebSiteManagementClient',
        destDir: 'lib/services/webSiteManagement/lib',
        output: 'webSiteManagementClient.js'
      },
      'Microsoft.WindowsAzure.WebSitesExtensions.Specification.dll' : {
        clientType: 'Microsoft.WindowsAzure.WebSitesExtensions.WebSiteExtensionsClient',
        destDir: 'lib/services/webSiteManagement/lib',
        output: 'webSiteExtensionsClient.js'
      },
      'Microsoft.WindowsAzure.Subscriptions.Specification.dll': {
        clientType: 'Microsoft.WindowsAzure.Subscriptions.SubscriptionClient',
        destDir: 'lib/services/subscriptionManagement/lib',
        output: 'subscriptionClient.js'
      },
      'Microsoft.Azure.Management.Resources.Specification.dll' : [
        {
          clientType: 'Microsoft.Azure.Management.Resources.ResourceManagementClient',
          destDir: 'lib/services/resourceManagement/lib',
          output: 'resourceManagementClient.js'
        },
        {
          clientType: 'Microsoft.Azure.Subscriptions.SubscriptionClient',
          destDir: 'lib/services/resourceManagement/lib',
          output: 'subscriptionClient.js'
        }
      ],
      'Microsoft.Azure.Gallery.Specification.dll': {
        clientType: 'Microsoft.Azure.Gallery.GalleryClient',
        destDir: 'lib/services/gallery/lib',
        output: 'galleryClient.js'
      },
      'Microsoft.Azure.Management.Authorization.Specification.dll': {
        clientType: 'Microsoft.Azure.Management.Authorization.AuthorizationManagementClient',
        destDir: 'lib/services/authorizationManagement/lib',
        output: 'authorizationManagementClient.js'
      },
      'Microsoft.Azure.Graph.RBAC.Specification.dll': {
        clientType: 'Microsoft.Azure.Graph.RBAC.GraphRbacManagementClient',
        destDir: 'lib/services/extra/lib',
        output: 'graphRbacManagementClient.js'
      },
      'Microsoft.Azure.Management.WebSites.Specification.dll': {
        clientType: 'Microsoft.Azure.Management.WebSites.WebSiteManagementClient',
        destDir: 'lib/services/webSiteManagement2/lib',
        output: 'webSiteManagementClient.js'
      }
    },

    //jsdoc config
    jsdoc : {
        dist : {
            src: [
                  "README.md",
                  "lib/azure.js",
                  "lib/serviceruntime/roleenvironment.js",
                  "lib/services/blob/blobservice.js",
                  "lib/services/computeManagement/lib/computeManagementClient.js",
                  "lib/services/hdinsight/hdinsightservice.js",
                  "lib/services/management/lib/managementClient.js",
                  "lib/services/monitoring/lib/autoscaleClient.js",
                  "lib/services/monitoring/lib/alertsClient.js",
                  "lib/services/monitoring/lib/metricsClient.js",
                  "lib/services/monitoring/lib/eventsClient.js",
                  "lib/services/networkManagement/lib/virtualNetworkManagementClient.js",
                  "lib/services/queue/queueservice.js",
                  "lib/services/scm/scmservice.js",
                  "lib/services/serviceBus/notificationhubservice.js",
                  "lib/services/serviceBus/apnsservice.js",
                  "lib/services/serviceBus/gcmservice.js",
                  "lib/services/serviceBus/mpnsservice.js",
                  "lib/services/serviceBus/wnsservice.js",
                  "lib/services/serviceBus/servicebusservice.js",
                  "lib/services/serviceBusManagement/lib/serviceBusManagementClient.js",
                  "lib/services/sql/sqlService.js",
                  "lib/services/sqlManagement/lib/sqlManagementClient.js",
                  "lib/services/storageManagement/lib/storageManagementClient.js",
                  "lib/services/storeManagement/lib/storeManagementClient.js",
                  "lib/services/subscriptionManagement/lib/subscriptionClient.js",
                  "lib/services/table/tableservice.js",
                  "lib/services/webSiteManagement/lib/webSiteManagementClient.js",
                  "lib/services/webSiteManagement/lib/webSiteExtensionsClient.js",
                  "lib/services/authorizationManagement/lib/authorizationManagementClient.js",
                  "lib/services/graph.rbac/lib/graphRbacManagementClient.js",
                  "lib/services/webSiteManagement2/lib/webSiteManagementClient.js"
            ],
            options: {
                destination: 'docs',
                configure: 'jsdoc/jsdoc.json'
            }
        }
    },
    devserver: { options:
      { 'type' : 'http',
        'port' : 8888,
        'base' : 'docs'
      }
    }
  });
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-devserver');

  grunt.loadTasks('tasks');

  grunt.registerTask('publishdocs', ['githubPages:target']);
  grunt.registerTask('generateCode', [ 'downloadNuGet', 'restorePackages', 'hydra']);
};
