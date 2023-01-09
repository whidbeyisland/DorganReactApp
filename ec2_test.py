import boto3
import paramiko
import time
from ec2_config import instance_id

# get your instance ID from AWS dashboard

ec2 = boto3.resource('ec2', region_name='us-west-2')
instance = ec2.Instance(id=instance_id)
instance.wait_until_running()
current_instance = list(ec2.instances.filter(InstanceIds=[instance_id]))
ip_address = current_instance[0].public_ip_address

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

def ssh_connect_with_retry(ssh, ip_address, retries):
    if retries > 3:
        return False
    # privkey = paramiko.RSAKey.from_private_key_file(
    #     './config/image_rec_auth.pem')
    privkey = paramiko.RSAKey.from_private_key_file(
        'MySQLEC2KeyPair.pem'
    )
    interval = 5
    try:
        retries += 1
        print('SSH into the instance: {}'.format(ip_address))
        ssh.connect(hostname=ip_address,
                    username='ubuntu', pkey=privkey)
        print('SSH successful')
        return True
    except Exception as e:
        print(e)
        time.sleep(interval)
        print('Retrying SSH connection to {}'.format(ip_address))
        ssh_connect_with_retry(ssh, ip_address, retries)
    
ssh_connect_with_retry(ssh, ip_address, 0)